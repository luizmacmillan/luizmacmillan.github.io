import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  width: 40%;
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
  background: white;
  a:visited {
    color: #000B0D;
  }
  .tag-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .tag {
    margin: 2px;
    padding: 3px 5px;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0 0 5px black;
  }
  .description {
    text-align: justify;
  }
  .project-name {
    text-align: center;
    font-size: 3rem;
  }
  .project-info {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    width: 80%;
    padding: 0 5px;
    justify-content: center;
    text-decoration: none;
  }
  .project-info svg {
    margin-right: 10px;
  }
  a.project-info:hover {
    box-shadow: 0 0 5px #09093B;
    border-radius: 30px;
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
