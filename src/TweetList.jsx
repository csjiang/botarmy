
import React, { Component } from 'react';
import logo from './BotArmy-01.svg';
// import logo from './BobbleTrump.png';
import './App.css';
import {Button, Grid, Row, Col } from 'react-bootstrap';

import tweets from '../stub/tweets.json';

class TweetList extends Component {

  componentDidUpdate(){
    this.fetchData;
    setInterval( ()=>this.fetchData());
  }

  fetchData() {
    this.state.tweets += tweets;
  }

  render() { 
    const {tweetItems} = this.props;
    const output = tweetItems.forEach( (item)=><TweetItem/>);
    return output;
  }

}

export default TweetList;