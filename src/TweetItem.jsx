
import React, { Component } from 'react';
import logo from './BotArmy-01.svg';
// import logo from './BobbleTrump.png';
import './App.css';
import {Button, Grid, Row, Col } from 'react-bootstrap';

class TweetItem extends Component { 


  render() {
    const {content} = this.props;
    return ( 
      <li className='tweetItem'>
        <div className='content'>{content}</div>
      </li>
    )
  }

}

export default TweetItem;