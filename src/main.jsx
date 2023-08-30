import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import App from './App'
import Listagem from './paginas/Listagem'
import Pesquisa from './paginas/Pesquisa'
import Produto from './paginas/Produto'
import Carrinho from './paginas/Carrinho'

import './estilos/index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Listagem />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="pesquisa" element={<Pesquisa />} />
          <Route path="carrinho" element={<Carrinho />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
