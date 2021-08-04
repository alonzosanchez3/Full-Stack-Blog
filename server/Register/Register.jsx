import React, {useState} from 'react';
import './Register.css';
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/register', {username, email, password})
    .then(() => {
      console.log('register successful')
    }).catch((err) => console.log(err))
  }

  return (
    <div className="register">
      <h1 className="register__title">Register</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__formLabel">Username</label>
        <input type="text" onChange={handleUsernameChange}/>
        <label className="register__formLabel">Email</label>
        <input type="email" onChange={handleEmailChange}/>
        <label className="register__formLabel">Password</label>
        <input type="password" onChange={handlePasswordChange}/>
        <button className="register__button" type="submit">Register</button>
        <label className="register__loginLabel">Already have an account? Login here:</label>
        <button className="register__loginButton"><Link style={{textDecoration:'none', color:'black'}}to="/login">Login</Link></button>
      </form>

    </div>
  )
}

export default Register;