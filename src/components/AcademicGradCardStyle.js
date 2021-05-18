import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  align-items: center;
  background-color: white;
  border-bottom: 10px solid black;
  border-radius: 5px;
  box-shadow: 0 0 5px black;
  color: #000B0D;
  display: flex;
  flex-direction: column;
  font-family: 'PT sans', sans-serif;
  justify-content: space-between;
  margin: auto;
  padding: 5px 20px 40px 20px;
  width: 80%;
  .academic-period {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .academic-period-icon {
    margin-right: 2rem;
  }
  hr {
    box-shadow: 0 0 3px gray;
    width: 5%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
  `}
`;

export default { Container };
