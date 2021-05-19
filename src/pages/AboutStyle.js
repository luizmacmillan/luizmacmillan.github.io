import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  background: #bed2d8;
  box-shadow: 0 0 8px black;
  color: #000B0D;
  font-family: 'PT sans', sans-serif;
  font-size: 1.5rem;
  margin: 3rem auto;
  padding: 2.5rem 0.8rem;
  .keywords {
    color: #fff;
    margin-top: 1rem;
    text-shadow: #CCC 1px 0 10px;
  }
  `}
`;

export default { Container };
