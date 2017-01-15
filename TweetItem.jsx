
import React, { Component } from 'react';
import logo from './BotArmy-01.svg';
// import logo from './BobbleTrump.png';
import './App.css';
import {Button, Grid, Row, Col } from 'react-bootstrap';

class TweetItem extends Component { 

  render() { 
    return ( 
      <div class ='tweetItem'>
        <div class = 'id'></div>
        <div class = 'content'>{tweetContent}</div>
      <div>
    )
  }

}

export default TweetItem;