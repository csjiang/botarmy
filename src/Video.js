import React from 'react';
import ReactDOM from 'react-dom';
const { Component } = React;
import { Link } from 'react-router';
import './Video.css';
import {Button } from 'react-bootstrap';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

export default class Video extends Component {
  render() {
    return (
      <div>
        <div className="video-background">
            <div className="video-foreground">
              <iframe src="https://www.youtube.com/embed/MTzmmakptKI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=MTzmmakptKI" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>

        <div id="vidtop-content">
        <div className="vid-info">
            <h1>if you identify as left of alt-right</h1>
            <h2>join the war to fight disinformation with disinformation</h2>
            <Link to='/join'>
              <Button bsSize="large" className="btn btn-primary">enlist</Button>
            </Link>
           
          </div>
        </div>
      </div>
    );
  }
}