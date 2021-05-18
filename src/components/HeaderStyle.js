import styled, { css } from 'styled-components';

const Container = styled.div`${({ selected }) => css`
  padding: 0 15vw;
  font-family: 'PT sans', sans-serif;
  display: flex;
  margin: 0 40px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: #000B0D;
  background: white;
  .sub-title {
    font-weight: normal;
    box-shadow: 0 4px 2px -2px gray;
    border-radius: 20px;
  }
  .nav-container {
    width: 100%;
    margin-top: 25px;
  }
  .nav-button {
    border: 1px solid #fff;
    font-size: 1.8rem;
    margin: 0.2rem 0.8rem;
    padding: 5px 8px;
    border-radius: 8px;
    background-color: #fff;
    color: #5d5a56;
  }
  .${selected} {
    border: 1px solid #5d5a56;
    cursor: pointer;
    box-shadow: 0 0 5px #000B0D;
    color: #000B0D;
  }
  button.nav-button:hover {
    border: 1px solid #5d5a56;
    cursor: pointer;
    box-shadow: 0 0 5px #000B0D;
    transition: 1s;
    color: #000B0D;
  }
  .name {
    font-size: 3rem;
    letter-spacing: 0.8rem;
  }
  `}
`;
const CounterContainer = styled.div`${() => css`
  position: absolute;
  right: 0;
  top: 0;
  margin: 20px 34px 20px 0;
  display: flex;
  align-items: center;
  img {
    margin-left: 3px;
  }
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
  }
  `}
`;

export default { Container, CounterContainer };
