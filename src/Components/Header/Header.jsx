import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>News</h1>
      <div className="user-data">
          <a className="login-button" href="#">
              <div className="login-button_circle"><span className="icon arrow"></span></div>
              <p className="login-button_text">Log in</p>
          </a>
      </div>
    </div>
  );
}

export default Header;
