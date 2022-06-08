import React from 'react'
import FotoHeader from './../FotoHeader'
import FotoDetalhe from './../FotoDetalhe'

const Foto = ({foto}) => {
  return (
    <div className="foto" >

      <FotoHeader foto={foto} ></FotoHeader>

      <img alt="foto" className="foto-src" src={foto.urlFoto} />

      <FotoDetalhe fotoDetalhe={foto} />

    </div>

  )
}

export default Foto
