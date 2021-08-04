import React, {useContext, useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {Context} from "../../context/Context";
import axios from 'axios'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {dispatch, isFetching} = useContext(Context)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"})
    axios.post('/server/login', {username, password})
    .then((res) => {
      console.log(res)
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    }).catch(err => {
      dispatch({type: "LOGIN_FAILURE"})
    })
  }

  const handlePasswordChange = (e) => {
    console.log(e)
    setPassword(e.target.value);
    console.log(password)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }


  return (
    <div className="login">
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit} className="login__form">


          <label className="login__formLabel" >Username: </label>
          <input type="text" onChange={handleUsernameChange}/>


          <label className="login__formLabel" >Password: </label>
          <input type="password" onChange={handlePasswordChange}/>

        <button className="login__formButton"type="submit" disabled={isFetching}>Login</button>
        <label className="login__formRegisterLabel">Don't have an account? Register here</label>
        <button className="login__formRegister"><Link style={{textDecoration:'none', color:'black'}} to="/register">Register</Link></button>
      </form>

    </div>
  )
}

export default Login;