
import React, { Component } from 'react';
// import logo from './BotArmy-01.svg';
// import logo from './BobbleTrump.png';
import './App.css';
// import {Button, Grid, Row, Col } from 'react-bootstrap';

// import tweets from '../stub/tweets.json';

import TweetList from './TweetList.jsx';

class Dashboard extends Component {

  render() { 
    console.log('!!!!!!!!!!!!');
    return( 
      <div style = {{visibility: 'visible', color: 'black'}}>
        <div>GRRRRRRRRR</div>
        <TweetList/>
      </div>
    );
  }

}

export default Dashboard;
