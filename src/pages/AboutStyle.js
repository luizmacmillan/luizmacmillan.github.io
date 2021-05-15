import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  margin: 3rem auto;
  font-family: 'PT sans', sans-serif;
  font-size: 1.5rem;
  padding: 2.5rem 0.8rem;
  box-shadow: 0 0 8px black;
  color: #000B0D;
  background: #bed2d8;
  }
  .keywords {
    margin-top: 1rem;
    text-shadow: #CCC 1px 0 10px;
    color: #fff;
  }
  `}
`;

export default { Container };
