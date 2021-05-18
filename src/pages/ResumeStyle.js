import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  background: #bed2d8;
  box-shadow: 0 0 8px black;
  color: #000B0D;
  font-family: 'PT sans', sans-serif;
  font-size: 1.8rem;
  margin: 3rem auto;
  padding: 2.5rem 0.8rem;
  text-align: center;
  `}
`;

export default { Container };
