import React from 'react'
import S from './Button.module.css'

const Button = ({text, bgcolor, color, func}) => {
  return (
    <button style={{backgroundColor: bgcolor, color: color}} className={S.button} onClick={func}>{text}</button>
  )
}

export default Button