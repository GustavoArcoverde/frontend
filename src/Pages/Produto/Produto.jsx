import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import { postProduto } from "../../Service/api";
import S from "./Produto.module.css";

const Produto = () => {
  const [dadosForms, setDadosForms] = useState({
    nome_completo: "",
    nome_abreviado: "",
    url: "",
    categoria: "",
    marca: "",
    avaliacao: "",
    cor: "",
    preco: "",
    porcentagem_desconto: "",
    descricao: ""
  });

  function handleDadosForms(target, nomeInput) {
    const value = target.value;
    setDadosForms({ ...dadosForms, [nomeInput]: value });
    console.log(dadosForms);
  }

  function fazerPost(){
    postProduto(dadosForms)
    console.log("Oi")
  }

  return (
    <section className={S.content}>
      <section className={S.upperSection}>
        <img src={!!dadosForms && dadosForms.url} alt="" />
        <form>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            value={dadosForms.nome_completo}
            onChange={({ target }) => handleDadosForms(target, "nome_completo")}
          />
          <label htmlFor="">Nome abreviado</label>
          <input
            type="text"
            value={dadosForms.nome_abreviado}
            onChange={({ target }) => handleDadosForms(target, "nome_abreviado")}
          />
          <label htmlFor="">URL</label>
          <input
            type="text"
            value={dadosForms.url}
            onChange={({ target }) => handleDadosForms(target, "url")}
          />
        </form>
      </section>
      <section className={S.middleSection}>
        <form>
          <label htmlFor="">Categoria</label>
          <input
            type="text"
            value={dadosForms.categoria}
            onChange={({ target }) => handleDadosForms(target, "categoria")}
          />

          <label htmlFor="">Marca</label>
          <input
            type="text"
            value={dadosForms.marca}
            onChange={({ target }) => handleDadosForms(target, "marca")}
          />

          <label htmlFor="">Avaliação</label>
          <input
            type="text"
            value={dadosForms.avaliacao}
            onChange={({ target }) => handleDadosForms(target, "avaliacao")}
          />

          <label htmlFor="">Cor</label>
          <input
            type="text"
            value={dadosForms.cor}
            onChange={({ target }) => handleDadosForms(target, "cor")}
          />

          <label htmlFor="">Preço</label>
          <input
            type="text"
            value={dadosForms.preco}
            onChange={({ target }) => handleDadosForms(target, "preco")}
          />

          <label htmlFor="">Porcentagem de desconto</label>
          <input
            type="text"
            value={dadosForms.porcentagem_desconto}
            onChange={({ target }) =>
              handleDadosForms(target, "porcentagem_desconto")
            }
          />
        </form>
        <label htmlFor="">Descrição</label>
        <input
          type="text"
          value={dadosForms.descricao}
          onChange={({ target }) => handleDadosForms(target, "descricao")}
        />
      </section>

      <section className={S.lowerSection}>
        <Button bgcolor="black" color="yellow" text="Cancelar" />
        <Button bgcolor="black" color="yellow" text="Excluir" />
        {/* <Button bgcolor="yellow" color="black" text="Salvar" func={fazerPost()}/> */}
        <button onClick={()=>fazerPost()}>Salvar</button>
      </section>
    </section>
  );
};

export default Produto;
