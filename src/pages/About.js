import React from 'react';
import Header from '../components/Header';

function About() {
  return (
    <main>
      <Header />
      <div>
        <p>
          Telefone:
          <span>(31) 9.7131-9922</span>
        </p>
        <p>
          Email:
          <a href="mailto:luizmello88@hotmail.com">
            luizmello88@hotmail.com
          </a>
        </p>
        <a href="https://github.com/luizmacmillan" target="_blank" rel="noreferrer">GitHub</a>
        <br />
        <a href="https://www.linkedin.com/in/luizmello88" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </main>
  );
}

export default About;
