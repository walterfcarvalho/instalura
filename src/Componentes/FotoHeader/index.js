import React from 'react'

const FotoHeader = ({ foto }) => {

  return (
    <header className="foto-header">
      <figure className="foto-usuario">
        <img src={foto.urlPerfil} alt="foto do usuario" />
        <figcaption className="foto-usuario">
          <a href={('/timeline/' + foto.loginUsuario)}>
            {foto.loginUsuario}
          </a>
        </figcaption>
      </figure>
      <time className="foto-data">{foto.horario}</time>
    </header>
  )
}

export default FotoHeader
