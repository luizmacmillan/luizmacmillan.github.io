import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  background: #bed2d8;
  box-shadow: 0 0 8px black;
  color: #000B0D;
  display: flex;
  margin: 3rem auto;
  flex-direction: column;
  font-family: 'PT sans', sans-serif;
  font-size: 1.8rem;
  justify-content: space-between;
  padding: 2.5rem 0.8rem;
  text-align: center;
  a {
    align-items: center;
    color: #000B0D;
    display: flex;
    font-weight: bold;
    justify-content: center;
    padding: 2rem;
    text-decoration: none;
  }
  a:hover {
    border-radius: 30px;
    box-shadow: 0 0 8px #09093B;
  }
  a:visited {
    color: #000B0D;
  }
  .contact-info {
    margin-left: 1.8rem;
  }
  `}
`;

export default { Container };
