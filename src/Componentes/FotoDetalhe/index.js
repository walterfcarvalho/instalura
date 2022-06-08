import React, { useState } from 'react'
import FotoInfo from '../FotoInfo'
import FotoAtualizacoes from '../FotoAtualizacoes'


const FotoDetalhe = ({ fotoDetalhe }) => {
  const [foto, setFoto] = useState(fotoDetalhe)

  function updateLikers(liker) {

    if (foto.likers.find(like => like.login === liker.login)) {
      return foto.likers.filter(like => like.login !== liker.login)
    } else {
      return foto.likers.concat(liker)
    }
  }

  function onLike(event) {
    event.preventDefault()
    // fetch(`http://localhost:8080/api/fotos/${foto.id}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, { method: 'POST' })
    fetch(`https://instalura-api.herokuapp.com//api/fotos/${foto.id}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, { method: 'POST' })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('erro')
        }
      })
      .then(liker => {
        console.log('liker:', liker)
        setFoto({ ...foto, likeada: !foto.likeada, likers: updateLikers(liker) })
      })
      .catch((error) => console.log(error))
  }

  function commentsUpdate(comment) {
    console.log(comment)
    return foto.comentarios.concat(comment)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const meuform = event.target
    // const url = `http://localhost:8080/api/fotos/${foto.id}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`
     const url = `https://instalura-api.herokuapp.com/api/fotos/${foto.id}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`

    const requestInfo = {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify({ texto: meuform.elements.comment.value })
    }

    fetch(url, requestInfo)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Erro ao enviar o login')
        }
      })
      .then(comment => {
        setFoto({ ...foto, comentarios: commentsUpdate(comment) })
      })

  }


  return (
    <div>
      <FotoInfo foto={foto} />

      <FotoAtualizacoes foto={foto} handleLike={onLike} handleSubmit={handleSubmit} />
    </div>
  )

}

export default FotoDetalhe