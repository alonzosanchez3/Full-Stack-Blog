import React, {useContext} from 'react';
import './Header.css'
import {Context} from '../context/Context.js';

const Header = (props) => {

  const {user} = useContext(Context)
  return (
    <div className="header">
      <div className="header_title">
        <h2>{user ? `Welcome` : 'Welcome please log in or register to gain full access'}</h2>

      </div>
      <img className="header_image" src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg" alt=""></img>

    </div>
  )
}

export default Header;