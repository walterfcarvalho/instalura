import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Foto from '../Foto'
import Cabecalho from './../Cabecalho'

import './timeline.css'


const TimeLine = () => {
  const [state, setState] = useState({ fotos: [] })

  const [userId, setUserId] = useState(useParams())

  useEffect(() => {

    getFotos()

    // eslint-disable-next-line
  }, [userId.login])


  function getFotos() {
    let url

    !userId.login
      // ? url = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`
      // : url = `http://localhost:8080/api/public/fotos/${userId.login}`
      ? url = `https://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`
      : url = `https://instalura-api.herokuapp.com/api/public/fotos/${userId.login}`

    fetch(url)
      .then((resp) => {
        return resp.json()
      })
      .then((dados) => {
        console.log(dados)
        setState({ fotos: dados })
      })
  }

  function handleSearch(event) {
    event.preventDefault()

    setUserId({ login: event.target.elements.pesquisa.value })

    getFotos()
  }

  return (
    <div className="fotos container">

      <Cabecalho handleSearch={handleSearch} />

      <TransitionGroup className="timeline">
        {
          state.fotos.map((dadoFoto, index) => {
            return (
              < CSSTransition
                exit = {900}  
                key={index}
                classNames="timeline"
                timeout={900}>

                <Foto key={index} foto={dadoFoto} />

              </CSSTransition>
            )

          })
        }
      </TransitionGroup>


    </div>
  )
}

export default TimeLine 