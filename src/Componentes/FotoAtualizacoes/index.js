import React from 'react'

const FotoAtualizacoes = ({foto, handleLike, handleSubmit}) => {

  const link = 'http://localhost:3000/timeline'


  return (
    <section className="fotoAtualizacoes">
      <a onClick={handleLike} href={link} className={foto.likeada ? "fotoAtualizacoes-like-ativo" : "fotoAtualizacoes-like"}>Likar</a>
     
      <form className="fotoAtualizacoes-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" id="comment" />
        <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
      </form>
    </section>
  )
}


export default FotoAtualizacoes
