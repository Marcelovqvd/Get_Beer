import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  height: 50px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px -6px 31px 0px rgba(189, 189, 189, 1);
  &:hover {
    opacity: 0.7;
  }
  h1 {
    font-size: 16px;
    font-weight: bold;
    font-family: 'Roboto';
    margin: 0 20px;
    color: #212121;

    @media (min-width: 1024px) {
      font-size: 22px;
    }
  }
  p {
    color: #757575;
    font-size: 16px;
    font-family: 'Roboto';
    margin: 0 10px;

    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;
