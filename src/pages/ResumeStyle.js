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
  .download-btn {
    background: white;
    border: none;
    border-radius: 10px;
    bottom: 0.5rem;
    box-shadow: 0 0 8px black;
    right: 0.5rem;
    position: fixed;
  }
  .download-icon {
    background: none;
    color: #000B0D;
    height: 6rem;
    margin: 0.5rem;
    width: 6rem;
  }
  .download-icon:hover {
    color: #2F402B;
    cursor: pointer;
  }
  `}
`;

export default { Container };
