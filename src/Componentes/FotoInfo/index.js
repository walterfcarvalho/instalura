import React from 'react'
import { Link } from "react-router-dom";

const FotoInfo = ({ foto }) => {
  
  
  return (
    <div className="foto-info">
      <div className="foto-info-likes">

        {foto.likers.map((item, index) => (
          <div key={index}>
            <Link to={(`/timeline/${item.login}`)}>{item.login} </Link>
          </div>
        ))} {foto.likers.length > 1 ? `${foto.likers.length} curtiram` : `${foto.likers.length} curtiu `   }

      </div>

      <p className="foto-info-legenda">
      <Link to={(`/timeline/${foto.loginUsuario}`)}>{foto.loginUsuario} </Link>        
        {foto.comentario}
      </p>

      <br></br>    
      <ul className="foto-info-comentarios">

        {foto.comentarios.map((item, index) => (
          <li key={index} className="comentario">
            <Link to={(`/timeline/${item.login}`)}>{item.login} </Link>
            {/* <a className="foto-info-autor">{item.login}: </a> */}
            {item.texto}
            <hr/>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default FotoInfo