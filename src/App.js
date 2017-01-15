import React, { Component } from 'react';
import logo from './BotArmy-01.svg';
// import logo from './BobbleTrump.png';
import './App.css';
// import TweetEmbed from 'react-tweet-embed';

import {Button, Grid, Row, Col } from 'react-bootstrap';

import TweetList from 'TweetList.jsx';


class App extends Component {
  render() {


    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={1} md={2} lg={2} />
            <Col xs={10} md={8} lg={8}>
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <h1 className="text-center title">Crush fake news</h1>
              <h2 className="text-center subtitle">with even more fake news</h2>
              <Button bsSize="large" block className="btn btn-primary">Robot-ize your Twitter</Button>
              <h3 className="text-center pre-embed">For the next 48 hours, turn your Twitter into a bot blasting left-fake-news</h3>
                <a className="twitter-timeline"
                  href="https://twitter.com/TreadCrumbs/lists/botarmy" data-chrome="nofooter  noheader"  data-width="500" data-height="500">
                </a>
              <h4 className="text-center post-embed">And hundreds more tweets like this, for the next 48 hours.</h4>
              <h5 className="text-center">Safe. Secure. No shady stuff.</h5>
            </Col>
            <Col xs={1} md={2} lg={2} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;


