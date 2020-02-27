import styled, { keyframes, css } from 'styled-components';

import { Link } from 'react-router-dom';

export const Image = styled.img`
  width: 200px;
  margin: 30px auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafa;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingPage = styled.div.attrs(props => ({}))`
  background: #212121;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin: 20px auto;
  list-style: none;
  border: 1px solid #e0e0e0;
  padding: 10px;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0px 0px 10px 0px rgba(189, 189, 189, 1);
    strong {
      font-size: 14px;
      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }
    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 14px;
      color: #616161;
      margin: 0 10px;
      @media (min-width: 1024px) {
        font-size: 16px;
      }
      small {
        margin: 0 2px;
        font-weight: 300;
        @media (min-width: 1024px) {
          font-size: 16px;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #212121;
  text-align: center;
  margin: 30px 0 5px 0;

  @media (min-width: 1024px) {
    font-size: 26px;
    margin: 40px 0 10px 0;
  }
`;

export const ToList = styled(Link)`
  background: #fafafa;
  color: #212121;
  border: none;
  padding: 0 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.5s;
  text-decoration: none;
  &:hover {
    background: #212121;
    color: #fafafa;
  }

  @media (min-width: 1024px) {
    font-size: 26px;
  }
`;
