import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  width: 80%;
  margin: auto;
  font-family: 'PT sans', sans-serif;
  padding: 5px 20px 40px 20px;
  border-bottom: 10px solid black;
  border-radius: 5px;
  box-shadow: 0 0 5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #000B0D;
  background-color: white;
  .academic-period {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .academic-period-icon {
    margin-right: 2rem;
  }
  hr {
    width: 5%;
    box-shadow: 0 0 3px gray;
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
