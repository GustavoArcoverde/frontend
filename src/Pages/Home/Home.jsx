import React from "react";
import CardProduto from "../../Components/CardProduto/CardProduto";
import S from "./Home.module.css";
import notebook from "../../Images/notebook.svg";
import teclado from "../../Images/teclado.svg";
import acessorios from "../../Images/acessorios.svg";
import picture from "../../Images/picture-main.svg";

const Home = () => {
  return (
    <section className={S.content}>
      <div className={S.left}>
        <section className={S.text}>
          <h1>Tecnologia e Informação</h1>
          <h2>Tudo na palma da mão</h2>
        </section>
        <div className={S.produtos}>
          <CardProduto text="Notebook" photo={notebook} url="/" />
          <CardProduto text="Notebook" photo={teclado} url="/" />
          <CardProduto text="Notebook" photo={acessorios} url="/" />
        </div>
      </div>
      <figure className={S.right}>
        <img src={picture} />
      </figure>
    </section>
  );
};

export default Home;
