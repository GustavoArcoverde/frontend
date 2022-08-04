import React from 'react'
import CardProduto from '../../Components/CardProduto/CardProduto'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProdutosPorCategoria } from '../../Service/api'

const Produtos = () => {
  const [produtos, setProdutos] = useState([])
  const params = useParams()

  async function req(){
    const response = await getProdutosPorCategoria(params.categoria)
    setProdutos(response)
  }

  useEffect(()=>{
    req()
  },[params.categoria])
  return (
    <div>
      <section>
        {!!produtos && produtos.map((produto)=>{
          return (<CardProduto 
            key={produto.id}
            photo={produto.url} 
            text={produto.nome_abreviado}
            url={`/produto/${produto.id}`}/>)
        })}
      </section>
    </div>
  )
}

export default Produtos