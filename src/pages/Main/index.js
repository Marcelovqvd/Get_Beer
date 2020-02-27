/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import { MdCached } from 'react-icons/md';

import {
  Container,
  List,
  ToDetails,
  ToRandom,
  Pagination,
  LoadingPage,
} from './styles';

import api from '../../services/api';

import Header from '../../components/Header';

export default class Main extends Component {
  state = {
    beers: [],
    loading: true,
    page: 1,
  };

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers = async () => {
    const { page } = this.state;
    const response = await api.get('/beers', {
      params: {
        per_page: 20,
        page,
      },
    });

    this.setState({
      beers: response.data,
      loading: false,
    });
  };

  handlePage = async action => {
    const { page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });
    this.loadBeers();
  };

  render() {
    const { beers, loading, page } = this.state;

    return (
      <Container>
        <LoadingPage loading={loading}>
          {loading ? (
            <MdCached color="#FFF" size={14} />
          ) : (
            <LoadingPage display="none" />
          )}
        </LoadingPage>
        <Header title="Choose your beer" />
        <List>
          {beers.map(beer => (
            <li key={String(beer.id)}>
              <strong>{beer.name}</strong>
              <ToDetails to={`/beers/${beer.id}`}>Details</ToDetails>
            </li>
          ))}
        </List>
        <Pagination>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => this.handlePage('back')}
          >
            Back
          </button>
          <span>Page {page}</span>
          <button
            type="button"
            disabled={page > 16}
            onClick={() => this.handlePage('next')}
          >
            Next
          </button>
        </Pagination>
        <ToRandom to="/beers/random/">I`m Feeling Luck</ToRandom>
      </Container>
    );
  }
}
