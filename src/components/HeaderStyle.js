import styled, { css } from 'styled-components';

const Container = styled.div`${({ selected }) => css`
  background: white;
  color: #000B0D;
  display: flex;
  flex-direction: column;
  font-family: 'PT sans', sans-serif;
  justify-content: space-between;
  margin: 0 40px;
  padding: 0 15vw;
  text-align: center;
  .name {
    font-size: 3rem;
    letter-spacing: 0.8rem;
  }
  .nav-button {
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 8px;
    color: #5d5a56;
    font-size: 1.8rem;
    margin: 0.2rem 0.8rem;
    padding: 5px 8px;
  }
  .nav-container {
    margin-top: 25px;
    width: 100%;
  }
  .sub-title {
    border-radius: 20px;
    box-shadow: 0 4px 2px -2px gray;
    font-weight: normal;
  }
  .${selected} {
    border: 1px solid #5d5a56;
    box-shadow: 0 0 5px #000B0D;
    color: #000B0D;
    cursor: pointer;
  }
  button.nav-button:hover {
    border: 1px solid #5d5a56;
    box-shadow: 0 0 5px #000B0D;
    color: #000B0D;
    cursor: pointer;
    transition: 1s;
  }
  `}
`;
const CounterContainer = styled.div`${() => css`
  align-items: center;
  display: flex;
  margin: 20px 34px 20px 0;
  position: absolute;
  right: 0;
  top: 0;
  div[data-hover] {
    position: relative;
  }
  div[data-hover]:hover::after {
    content: attr(data-hover);
    position: absolute;
    right: 20px;
    top: 3px;
    min-width: 175px;
    font-size: 14px;
    z-index: 1;
  }
  img {
    margin-left: 3px;
  }
  `}
`;

export default { Container, CounterContainer };
