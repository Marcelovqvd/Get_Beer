/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MdCached } from 'react-icons/md';

import { Container, List, Title, ToList, LoadingPage } from './styles';

import api from '../../services/api';

import Header from '../../components/Header';

export default class ForBrewers extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    beer: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const { id } = match.params;

    const response = await api.get(`/beers/${id}`);
    this.setState({
      beer: response.data,
      loading: false,
    });
  }

  render() {
    const { beer, loading } = this.state;

    return (
      <>
        <Header title="If you are a brewer" />
        <Container>
          <LoadingPage loading={loading}>
            {loading ? (
              <MdCached color="#FFF" size={14} />
            ) : (
              <LoadingPage display="none" />
            )}
          </LoadingPage>
          <List>
            {beer.map(b => (
              <li key={String(b.id)}>
                <Title>{b.name}</Title>

                <p>First Brewed: {b.first_brewed} </p>
                <p>abv: {b.abv}</p>
                <p>ibu: {b.ibu}</p>
                <p>srm: {b.srm}</p>
                <p>PH: {b.ph}</p>
                <p>attenuation_level: {b.attenuation_level}</p>
                <p>
                  Volume: {b.volume.value}
                  <small>{b.volume.unit}</small>
                </p>
                <p>
                  Boil Volume: {b.boil_volume.value}
                  <small> {b.boil_volume.unit}</small>
                </p>
                <p>* {b.brewers_tips}</p>

                <Title>Ingredients</Title>

                <List>
                  <strong>Malt</strong>
                  {b.ingredients.malt.map(m => (
                    <li key={String(m.name)}>
                      <p>
                        {m.name}:
                        <small>
                          {m.amount.value} {m.amount.unit}
                        </small>
                      </p>
                    </li>
                  ))}
                </List>

                <List>
                  <strong>Hops</strong>
                  {b.ingredients.hops.map(h => (
                    <li key={String(h.name)}>
                      <p>
                        {h.name}:
                        <small>
                          {h.amount.value} {h.amount.unit}
                        </small>
                      </p>
                      <p>Add: {h.add}</p>
                      <p>Attribute: {h.attribute}</p>
                    </li>
                  ))}
                </List>
                <List>
                  <strong>Yeast</strong>
                  <li key={String(b.name)}>
                    <span> {b.ingredients.yeast}</span>
                  </li>
                </List>
              </li>
            ))}
          </List>
        </Container>
        <ToList to="/">Back to beer list</ToList>
      </>
    );
  }
}
