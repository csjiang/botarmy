import React, { Component } from 'react';
import logo from './BotArmy-01.svg';
// import logo from './BobbleTrump.png';
import './App.css';
import {Button, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

const TwitterLoading = () => {
    const widget = document.createElement('script');
    widget.src = "https://platform.twitter.com/widgets.js";
    widget.charset = 'utf-8';
    widget.async = true;
    return widget;
      // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  }

class App extends Component {

  componentDidMount() {
    document
      .querySelector('.App')
      .appendChild(TwitterLoading());
  }

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
              <Button bsSize="large" block className="btn btn-primary"><Link href="https://earsplitting-origami.gomix.me/login/twitter/return">Robot-ize your Twitter</Link></Button>
              <h3 className="text-center pre-embed">For the next 24 hours, turn your Twitter into a bot blasting left-fake-news</h3>
                <a className="twitter-timeline"
                  href="https://twitter.com/TreadCrumbs/lists/botarmy" data-chrome="nofooter  noheader"  data-width="500" data-height="500">
                </a>
              <h4 className="text-center post-embed">And hundreds more tweets like this, for the next 24 hours.</h4>
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


