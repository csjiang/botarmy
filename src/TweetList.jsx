
import React, { Component } from 'react';

import xhr from 'xhr';
import shuffle from 'shuffle-array';


import logo from './BotArmy-01.svg';
// import logo from './BobbleTrump.png';
import './App.css';
import {Button, Grid, Row, Col } from 'react-bootstrap';

import backupTweets from './stub/tweets.js';

import TweetItem from './TweetItem.jsx';

const twitUrl = 'http://earsplitting-origami.gomix.me/fake-tweets';

class TweetList extends Component {

  constructor(...p) { 
    super(...p);
    this.fetchData(this);
    setInterval(()=>this.fetchData(this), 5000);
  }

  componentWillMount() { 
    
  }

  componentDidUpdate(){
    
    
  }

  fetchData(comp) {
    xhr( 
      { 
        uri: twitUrl,
        headers: { 
          "Content-Type": "application/json"
        }
      },
      (err, res, body) => { 
        let tweets;

        if (err) {
          tweets = shuffle(backupTweets);
          comp.setState({tweets: tweets});
          
          return
        }
        
        try { 
          tweets = JSON.parse(body);
        } 

        catch( e) { 
          tweets = shuffle(backupTweets);
          console.log(this)
          
        }
        comp.setState({tweets: tweets[1]});
     }
    );
  }

  render() { 
    const state = this.state||{tweets: []};
    const {tweets} = state
    
    const output = tweets.map( 
      (item, i)=>{ 
        return <TweetItem key={'item_' + String(i)} content={item.tweet_text}/>
      }
    );


    return (<div>{output}</div>);
  }

}

export default TweetList;
