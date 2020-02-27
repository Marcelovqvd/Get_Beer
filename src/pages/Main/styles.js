import styled, { keyframes, css } from 'styled-components';

import { Link } from 'react-router-dom';

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
  li {
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #E0E0E0;
    box-shadow: 0px 0px 10px 0px rgba(189, 189, 189, 1);
    > strong {
      font-size: 16px;
      color: #212121;
      margin: 5px 5px;
      @media (min-width: 768px) {
        margin-right: 160px;
      }

      @media (min-width: 1024px) {
        margin-right: 250px;
      }
    }
  }
`;

export const ToDetails = styled(Link)`
  background: #fafafa;
  height: 30px;
  color: #212121;
  border: none;
  border-radius: 4px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  transition: background 0.5s;
  text-decoration: none;
  box-shadow: 0px 6px 11px 0px rgba(189, 189, 189, 1);
  &:hover {
    background: #212121;
    color: #fafafa;
  }
`;

export const ToRandom = styled(Link)`
  background: #212121;
  max-width: 150px;
  margin: 15px auto;
  height: 30px;
  color: #fafafa;
  border: none;
  border-radius: 4px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.5s;
  text-decoration: none;
  box-shadow: 0px 6px 11px 0px rgba(189, 189, 189, 1);
  &:hover {
    background: #fff;
    color: #212121;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background: #212121;
    margin: 15px auto;
    height: 30px;
    color: #fafafa;
    border: none;
    border-radius: 4px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.5s;
    text-decoration: none;
    box-shadow: 0px 6px 11px 0px rgba(189, 189, 189, 1);
    &:hover {
      background: #fff;
      color: #212121;
    }
  }
`;
