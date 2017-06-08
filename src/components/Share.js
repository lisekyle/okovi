import React, { Component } from 'react';
import Buttons from './ShareButtons';

class Share extends Component {
  render() {

    return (
      <div className="share__wrapper">
        <div className="title--share two--share">
          <h1>Okovi</h1>
          <h4>Zola Jesus</h4>
        </div>
        <div className="share__buttons three--share">
          <p>Share Video</p>
          <Buttons />
        </div>
        <div className="share__homepage four--share">
          <a href="http://eepurl.com/49Va1" target="_blank">Subscribe to receive updates about okovi</a><br/><br/>
          <a href="http://zolajesus.com" target="_blank" rel="noopener noreferrer">zolajesus.com</a>
        </div>
      </div>

    );
  }
}

export default Share;
