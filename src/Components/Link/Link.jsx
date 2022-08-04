import React from 'react'
import { Link } from 'react-router-dom'
import S from './Link.module.css'

const Links = ({text, url}) => {
  return (
    <Link to={url} className={S.link}>{text}</Link>
  )
}

export default Links