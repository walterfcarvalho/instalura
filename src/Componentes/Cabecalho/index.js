import React from 'react'
import { useNavigate, Link } from "react-router-dom";

const Cabecalho = ({handleSearch}) => {
  const navigate = useNavigate()

  function logOff() {
    localStorage.clear()
    navigate("/")
  }
  
  function link () {
    navigate("#")
  }

  return (
    <header className="header container">

      <h1 className="header-logo">
        Instalura
      </h1>

      <form className="header-busca" onSubmit={handleSearch} >
        <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo" id="pesquisa" />
        <input type="submit" value="Buscar" className="header-busca-submit" />
      </form>

      <nav>
        <ul className="header-nav">
          <li  className="header-nav-item">
            <Link to= {link}>
              ♡
              {/* <!--                 ♥-->
                <!--Quem deu like nas minhas fotos?--> */}
            </Link>
          </li>
        </ul>
      </nav>

      <a className='href' onClick={logOff}>
        Logoff
      </a>

    </header>

  )
}

export default Cabecalho  
