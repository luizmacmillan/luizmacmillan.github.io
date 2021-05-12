import styled, { css } from 'styled-components';

const Container = styled.div`${() => css`
  width: 90%;
  margin: 3rem auto;
  font-family: 'PT sans', sans-serif;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-around;
  justify-content: space-around;
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
    width: 30%;
    padding: 0 12px;
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
