import React from 'react';

import Style from './HomeStyle';

function Home() {
  return (
    <content>
      <Style.Container>
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
    </content>
  );
}

export default Home;
