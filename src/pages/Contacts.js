import React from 'react';
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin, MdMail } from 'react-icons/all';

import Style from './ContactsStyle';

function Contacts() {
  return (
    <main>
      <Style.Container>
        <a href="https://github.com/luizmacmillan" target="_blank" rel="noreferrer">
          <FaGithubSquare fill="#000B0D" size="5rem" />
          <span className="contact-info">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/luizmello88" target="_blank" rel="noreferrer">
          <FaLinkedin fill="#000B0D" size="5rem" />
          <span className="contact-info">LinkedIn</span>
        </a>
        <a href="https://wa.me/5531971319922" target="_blank" rel="noreferrer">
          <FaWhatsappSquare fill="#000B0D" size="5rem" />
          <span className="contact-info">(31) 9.7131-9922</span>
        </a>
        <a href="mailto:luizmello88@hotmail.com">
          <MdMail fill="#000B0D" size="5rem" />
          <span className="contact-info">luizmello88@hotmail.com</span>
        </a>
      </Style.Container>
    </main>
  );
}

export default Contacts;
