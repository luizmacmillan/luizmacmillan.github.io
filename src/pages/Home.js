import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <main>
      <Header />
      <p>
        Conheça um pouco sobre mim e algumas das minhas capacidades
        no desenvolvimento web. Este site foi desenvolvido utilizando
        React e ContextAPI e devo ressaltar que nem todas as tecnologias
        utilizadas são realmente necessárias, porém, eu as escolhi apenas
        para demonstração técnica.
        <br />
        Sinta-se convidado(a) a enviar-me uma mensagem caso tenha alguma dúvida.
      </p>
    </main>
  );
}

export default Home;
