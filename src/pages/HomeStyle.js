import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  align-items: center;
  background: #bed2d8;
  box-shadow: 0 0 8px black;
  color: #000B0D;
  display: flex;
  font-family: 'PT sans', sans-serif;
  font-size: 1.8rem;
  justify-content: space-around;
  margin: 3rem auto;
  padding: 2.5rem 2rem;
  text-align: center;
  img {
    border-radius: 40px;
    box-shadow: 0 0 20px white;
    left: 0;
    margin-right: 2rem;
    min-width: 18rem;
    position: relative;
    width: 20%;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  `}
`;

export default { Container };
