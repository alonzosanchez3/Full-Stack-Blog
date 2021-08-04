import React, {useContext} from 'react';
import "./Nav.css"
import {Context} from "../context/Context.js"
import {Link} from 'react-router-dom'

const Nav = () => {
  const {user, dispatch} = useContext(Context)

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  };



  return (
    <div className="nav">
      <div className="navLeft">
        <ul className="navLeft__list">
          <li className="navLeft__listItem"><Link to="/" className="navLink">HOME</Link></li>
          <li className="navLeft__listItem"><Link style={{textDecoration:'none', color:'black'}} to="/create">CREATE</Link></li>
          <li className="navLeft__listItem" onClick={handleLogout}>{user && 'LOGOUT'}</li>
          {user ? <div></div> : (<li className="navLeft__listItem"><Link style={{textDecoration:'none', color:'black'}} to="/register">REGISTER</Link></li>)}
          {user ? <li></li> : (<li className="navLeft__listItem"><Link style={{textDecoration:'none', color:'black'}} to="/login">LOGIN</Link></li>)}
        </ul>
      </div>
      <div className="navRight">
        <img src="https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png" className="profilePic" alt=""></img>
      </div>
    </div>
  )
}

export default Nav