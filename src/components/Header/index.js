import React from 'react';
import { Container } from './styles';

export default function index({ title }) {
  return (
    <Container>
      <h1>For Beer Lovers</h1>
      <p>{title}</p>
    </Container>
  );
}
