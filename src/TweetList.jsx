
import React, { Component } from 'react';
import logo from './BotArmy-01.svg';
// import logo from './BobbleTrump.png';
import './App.css';
import {Button, Grid, Row, Col } from 'react-bootstrap';

import tweets from '../stub/tweets.json';

import TweetItem from './TweetItem.jsx';

class TweetList extends Component {

  componentDidUpdate(){
    this.fetchData;
    setInterval( ()=>this.fetchData());
  }

  fetchData() {
    console.log(JSON.stringify(tweets).slice(0, 200));
    this.state.tweets += tweets;

  }

  render() { 
    const {tweetItems} = this.props;
    const output = tweetItems.forEach( 
      (item)=><TweetItem content={item.content}/>
    );
    return output;
  }

}

export default TweetList;