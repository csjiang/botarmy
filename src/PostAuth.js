import React, { Component } from 'react';
import logo from './BotArmy-01.svg';
import './PostAuth.css';
import {Button, Grid, Row, Col } from 'react-bootstrap';
import ReactCountdownClock from 'react-countdown-clock';

class PostAuth extends Component {

  render() {
    return (
      <div className="PostAuth">
        <Grid>
          <Row className="show-grid">
            <Col xs={1} md={2} lg={2} />
            <Col className="middleColumn" xs={10} md={8} lg={8}>
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <h1 className="text-center title">Congrats! You're authenticated.</h1>
              <h2 className="text-center subtitle">For the next 24 hours, we will post tweets from your account.</h2>
              <ReactCountdownClock seconds={172800}
                     color="#FFF"
                     alpha={0.9}
                     size={500}
                     timeFormat="hms"/>
              <Button bsSize="large" block className="btn btn-primary">Discharge early (opt-out of army)</Button>
            </Col>
            <Col xs={1} md={2} lg={2} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PostAuth;


