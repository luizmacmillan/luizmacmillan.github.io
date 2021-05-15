import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  margin: 3rem auto;
  font-family: 'PT sans', sans-serif;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 2.5rem 0.8rem;
  box-shadow: 0 0 8px black;
  color: #000B0D;
  background: #bed2d8;
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 2rem;
    color: #000B0D;
  }
  a:visited {
    color: #000B0D;
  }
  a:hover {
    box-shadow: 0 0 8px #09093B;
    border-radius: 30px;
  }
  .contact-info {
    margin-left: 1.8rem;
  }
  }
  `}
`;

export default { Container };
