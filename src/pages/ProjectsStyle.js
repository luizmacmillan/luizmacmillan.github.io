import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  align-content: space-around;
  background: #bed2d8;
  box-shadow: 0 0 5px black;
  color: #000B0D;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: 'PT sans', sans-serif;
  justify-content: space-around;
  margin: 3rem auto;
  padding: 2.5rem 0.8rem;
  `}
`;

export default { Container };
