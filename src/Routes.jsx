import React from 'react'
import {BrowserRouter, Route, Routes as Switch} from 'react-router-dom'
import Header from './Components/Header/Header'
import Administrador from './Pages/Administrador/Administrador'
import Home from './Pages/Home/Home'
import Produto from './Pages/Produto/Produto'
import Produtos from './Pages/Produtos/Produtos'

const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='/produtos/:categoria' element={<Produtos/>}/>
        <Route path='/produto' element={<Produto/>}/>
        <Route path='/administrador' element={<Administrador/>}/>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes