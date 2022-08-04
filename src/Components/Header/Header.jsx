import React from "react";
import { Link } from "react-router-dom";
import S from "./Header.module.css";

const Header = () => {
  return (
    <header className={S.header}>
      <h1>React Store</h1>
      <nav>
        <Link className={S.link} to="/">Home</Link>
        <Link className={S.link} to="/produtos/notebooks">Notebooks</Link>
        <Link className={S.link} to="/produtos/monitores">Monitores</Link>
        <Link className={S.link} to="/produtos/acessorios">Acessórios</Link>
        <Link className={S.link} to="/administrador">Administração</Link>
      </nav>
    </header>
  );
};

export default Header;
