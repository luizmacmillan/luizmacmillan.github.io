import React from 'react';
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin, MdMail } from 'react-icons/all';

import Header from '../components/Header';

function Contacts() {
  return (
    <main>
      <Header />
      <div>
        <a href="https://wa.me/5531971319922" target="_blank" rel="noreferrer">
          <FaWhatsappSquare fill="#000B0D" size="5rem" />
          (31) 9.7131-9922
        </a>
        <a href="mailto:luizmello88@hotmail.com">
          <MdMail fill="#000B0D" size="5rem" />
          luizmello88@hotmail.com
        </a>
        <a href="https://github.com/luizmacmillan" target="_blank" rel="noreferrer">
          <FaGithubSquare fill="#000B0D" size="5rem" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/luizmello88" target="_blank" rel="noreferrer">
          <FaLinkedin fill="#000B0D" size="5rem" />
          LinkedIn
        </a>
      </div>
    </main>
  );
}

export default Contacts;
