import React from 'react';

import myPhoto from '../assets/myPhoto.jpeg';
import Style from './HomeStyle';

function Home() {
  return (
    <section>
      <Style.Container>
        <img src={ myPhoto } alt="Me with Trybe t-shirt." />
        <p>
          Conheça um pouco sobre mim e algumas das minhas capacidades
          no desenvolvimento web.
          <br />
          <br />
          Este site foi desenvolvido utilizando
          React e ContextAPI e devo ressaltar que nem todas as tecnologias
          utilizadas são realmente necessárias, porém, eu as escolhi apenas
          para demonstração técnica.
          <br />
          <br />
          Sinta-se convidado(a) a enviar-me uma mensagem caso tenha alguma dúvida.
        </p>
      </Style.Container>
    </section>
  );
}

export default Home;
