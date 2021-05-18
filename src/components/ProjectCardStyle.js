import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  align-items: center;
  background: white;
  border-bottom: 10px solid black;
  border-radius: 5px;
  box-shadow: 0 0 5px black;
  color: #000B0D;
  display: flex;
  flex-direction: column;
  font-family: 'PT sans', sans-serif;
  justify-content: space-between;
  padding: 5px 20px 40px 20px;
  width: 40%;
  a:visited {
    color: #000B0D;
  }
  a.project-info:hover {
    border-radius: 30px;
    box-shadow: 0 0 5px #09093B;
  }
  .description {
    text-align: justify;
  }
  .project-name {
    font-size: 3rem;
    text-align: center;
  }
  .project-info {
    align-items: center;
    display: flex;
    font-size: 1.3rem;
    justify-content: center;
    min-width: 18rem;
    padding: 0 5px;
    text-decoration: none;
    width: 80%;
  }
  .project-info svg {
    margin-right: 1rem;
  }
  .tag {
    border-radius: 5px;
    box-shadow: 0 0 5px black;
    font-weight: bold;
    margin: 2px;
    padding: 3px 5px;
  }
  .tag-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (max-width: 1200px) {
    width: 80%;
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
