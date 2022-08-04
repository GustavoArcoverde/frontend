import React from "react";
import Linha from "../../Components/Linha/Linha";
import { useEffect } from "react";
import { useState } from "react";
import { getProdutos } from "../../Service/api";
import { Link, useParams } from "react-router-dom";
import S from "./Administrador.module.css";

const Administrador = () => {
  const [linhas, setLinhas] = useState([]);
  const [input, setInput] = useState('')
  // const params = useParams()

  async function req() {
    const response = await getProdutos();
    setLinhas(response);
    console.log(linhas);
  }

  function handleInput(target){
    setInput(target.value)
    console.log(input)
  }

  useEffect(() => {
    req();
  }, []);

  return (
    <div className={S.content}>
      <input type="text" placeholder="Pesquisar" value={input} onChange={({target})=>handleInput(target)}/>
      <Link to="/produto">
        Adicionar Produto
      </Link>
      <div>
        {!!linhas &&
          linhas.map((linha) => {
            return (
              <Linha
                key={linha.id}
                nome={linha.nome_abreviado}
                preco={linha.preco}
                categoria={linha.categoria}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Administrador;
