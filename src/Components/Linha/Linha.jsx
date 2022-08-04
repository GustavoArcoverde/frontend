import React from "react";
import { Link } from "react-router-dom";
import iconEditar from '../../Images/icon-editar.svg'
import Button from "../Link/Link";
import S from './Linha.module.css'

const Linha = ({nome, preco, categoria}) => {
  return (
    <section className={S.content}>
      <div className={S.caixa}>
        <h3>Nome</h3>
        <p className={S.valores}>{nome}</p>
      </div>
      <div className={S.caixa}>
        <h3>Preço</h3>
        <p className={S.valores}>{preco}</p>
      </div>
      <div className={S.caixa}>
        <h3>Categoria</h3>
        <p className={S.valores}>{categoria}</p>
      </div>
      <Link to="/produto" >
        <img src={iconEditar} alt=""/>
      </Link>
    </section>
  );
};

export default Linha;
