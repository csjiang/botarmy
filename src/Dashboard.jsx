
import React, { Component } from 'react';
import logo from './BotArmy-01.svg';
import './App.css';
import './Dashboard.css';
// import {Button, Grid, Row, Col } from 'react-bootstrap';

// import tweets from '../stub/tweets.json';
import {Button, Grid, Row, Col } from 'react-bootstrap';


import TweetList from './TweetList.jsx';

class Dashboard extends Component {

  render() { 
    return( 
      <div className="App Dash">
        <Grid>
          <Col xs={1} md={2} lg={2} />
            <Col xs={10} md={8} lg={8}>
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <h1 className="text-center title">Crush fake new</h1>
              <h2 className="text-center subtitle">with even more fake news</h2>
              <Button bsSize="large" block className="btn btn-primary">Robot-ize your Twitter</Button>


              <div style = {{visibility: 'visible', color: 'black'}}>
                <TweetList/>
              </div>
                
              <h4 className="text-center post-embed">And hundreds more tweets like this, for the next 48 hours.</h4>
              <h5 className="text-center">Safe. Secure. No shady stuff.</h5>
            </Col>
          
        </Grid>
      </div>
    );
  }

}

export default Dashboard;
