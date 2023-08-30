import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {BiStoreAlt, BiSearch, BiCart} from "react-icons/bi"

import '../estilos/Header.css'

const Header = () => {
  const [pesquisa, setPesquisa] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!pesquisa) return

    navigate(`/pesquisa?q=${pesquisa}`)
    setPesquisa("")
  }

  return (
    <nav id="header">
        <h2>
            <Link to="/loja-react-deploy"><BiStoreAlt />Loja</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Buscar produto" 
              onChange={(e) => setPesquisa(e.target.value)}
              value={pesquisa}
            />
              <button type="submit">
                  <BiSearch />
              </button>
        </form>
        <h2>
          <Link to="/carrinho"><BiCart /></Link>
        </h2>
    </nav>
  )
}

export default Header