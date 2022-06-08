import React, {useState} from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";


import './login.css'

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({})
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();

  function enviaLogin(event) {
    event.preventDefault()
    const form = event.target
    const requestInfo = {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify({ login: form.elements.login.value, senha: form.elements.senha.value })
    }

    // fetch('http://localhost:8080/api/public/login', requestInfo)
    fetch('https://instalura-api.herokuapp.com/api/public/login', requestInfo)
      .then((response) => {
        if (response.ok) {
          return response.text()
        } else {
          throw new Error('Erro de Login')
        }
      })
      .then(token => {
        localStorage.setItem('auth-token', token)
        navigate("/timeline")
      })
      .catch((error) => {
        setErrorMessages({ name: "pass", message: "logins:(alots|vitor|rafael) password:123456" })
       })
  }


  return (


    <div className="login-box">

      <h1 className='header-logo'>Instalura</h1>
      <form onSubmit={enviaLogin}>
        <div className="pure-control-group">
          <input
            type="text"
            placeholder="Login"
            autoFocus
            defaultValue=""
            id="login"
          />
          <input
            type="password"
            placeholder="senha"
            id="senha"
            defaultValue=""
          />
          <input type="submit" value="Login" />
          <span className="error"></span>
        </div>

        <span id="msg" name="msg">{searchParams.get('msg')}
        {errorMessages.message}
        </span>
      </form>
    </div>
  )
}

export default Login