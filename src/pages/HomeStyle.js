import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  margin: 3rem auto;
  display: flex;
  font-family: 'PT sans', sans-serif;
  font-size: 1.8rem;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 2.5rem 2rem;
  box-shadow: 0 0 8px black;
  color: #000B0D;
  background: #bed2d8;
  }
  img {
    position: relative;
    left: 0;
    box-shadow: 0 0 20px white;
    width: 20%;
    min-width: 18rem;
    border-radius: 40px;
    margin-right: 2rem;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  `}
`;

export default { Container };
