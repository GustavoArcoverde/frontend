import React from 'react'
import Links from '../Link/Link'
import S from './CardProduto.module.css'

const CardProduto = ({photo, text, url}) => {
  return (
    <div className={S.content}>
        <img src={photo} alt="" />
        <p>{text}</p>
        <Links text='COMPRAR' url={url}/>
    </div>
  )
}

export default CardProduto