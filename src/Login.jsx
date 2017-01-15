import React, { Component } from 'react';
import buttonImage from '../public/BobbleTrump.png';
import './App.css';

class Login extends Component {
  render() {
    return (
      <div className="UserStatus">
        <a href="/auth/twitter">
          <img src={buttonImage} className="App-logo" alt="logo" />
          <br/>
          <h2>Join The Robot Army</h2>

        </a>
      </div>
    );
  }
}

export default Login;



