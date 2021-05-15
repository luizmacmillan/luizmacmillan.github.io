import React from 'react';
import Header from '../components/Header';
import Style from './AboutStyle';

function About() {
  return (
    <main>
      <Header />
      <Style.Container>
        <p>
          Sou apaixonado por Tecnologia, estudante ávido e empolgado de inglês (Mairo
          Vergara) e desenvolvimento de software (Trybe). Trabalhei por 8 anos na
          empresa Tambasa Atacadistas alcançando o cargo de Gerente de Vendas e me
          formei como Bacharel em Administração de Empresas pela Faculdade Pitágoras.
          <br />
          <br />
          Palavras-chave:
          <br />
          <span className="keywords">
            Metodologias Ágeis, Trabalho em Equipe, Escuta Ativa, Desenvolvedor Web,
            Front-End, Back-End, Full Stack, JavaScript, React, Redux, Context API, SQL,
            MySQL, NoSQL, MongoDB, Node.Js, Express, Arquitetura MSC, RESTful.
          </span>
        </p>
        <hr />
        <p>
          I am passionate about Technology, an avid and excited student of English
          (Mairo Vergara) and software development (Trybe). I worked for 8 years in the
          company Tambasa Atacadistas, reaching the position of Sales Manager and I
          graduated as a Bachelor in Business Administration from Faculdade Pitágoras.
          <br />
          <br />
          Key words:
          <br />
          <span className="keywords">
            Agile Methodologies, Teamwork, Active Listening, Web Developer, Front-End,
            Back-End, Full Stack, JavaScript, React, Redux, Context API, SQL, MySQL,
            NoSQL, MongoDB, Node.Js, Express, MSC Architecture, RESTful.
          </span>
        </p>
      </Style.Container>
    </main>
  );
}

export default About;
