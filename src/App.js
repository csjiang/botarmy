import React, { Component } from 'react';
import logo from './BotArmy-01.svg';
// import logo from './BobbleTrump.png';
import './App.css';
import TweetEmbed from 'react-tweet-embed';
import {Button, Grid, Row, Col } from 'react-bootstrap';


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
              <h2 className="text-center">with even more fake news</h2>
              <Button bsSize="large" block className="btn btn-primary">Robotify your Twitter</Button>
              <h3 className="text-center">For the next 48 hours, turn your Twitter into a bot blasting left-fake-news</h3>
              <p className="text-center App-intro">
                <a className="twitter-timeline"
                  href="https://twitter.com/TreadCrumbs/timelines/820467882391957506" data-tweet-limit="3" data-chrome="nofooter transparent noscrollbar noheader">
                </a>
              </p>
              <h4 className="text-center">And hundreds more tweets like this, for the next 48 hours.</h4>
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


