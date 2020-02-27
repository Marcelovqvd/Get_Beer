/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MdCached } from 'react-icons/md';

import {
  Container,
  List,
  Title,
  ToList,
  ToBrewers,
  Image,
  LoadingPage,
} from './styles';

import api from '../../services/api';

import Header from '../../components/Header';

export default class Beer extends Component {
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
        <Header title="Your Beer" />
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
                <strong>
                  Description:
                  <span>{b.description}</span>
                </strong>
                <strong>
                  Slogan:<span>{b.tagline}</span>
                </strong>
                <strong>
                  First Brewed:<span>{b.first_brewed}</span>
                </strong>
                <Image src={b.image_url} alt={b.name} />
                <ToBrewers to={`/forbrewers/${b.id}`}>ForBrewers</ToBrewers>
              </li>
            ))}
          </List>
          <ToList to="/">Back to beer list</ToList>
        </Container>
      </>
    );
  }
}
