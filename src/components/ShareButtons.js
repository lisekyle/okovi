import React, { Component } from 'react';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';


const {
  FacebookShareButton,
  TwitterShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

export class Buttons extends Component {

  render () {
    const shareUrl = 'http://zolajesus.com/okovi/#/video';
    const title = 'OKOVI';
    const picture = 'http://zolajesus.com/teaservid.gif';
    const description = 'http://zolajesus.com/okovi/#/video';
    const hashtags = ['OKOVI', 'zolajesus'];


    return (
      <ul className="share__icons">
        <li>
          <FacebookShareButton
            url={shareUrl}
            title={title}
            picture={picture}
            description={description}
            className="share__button">
            <FacebookIcon
              size={16}
              round />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton
           url={shareUrl}
           hashtags={hashtags}
           className="share__button">
           <TwitterIcon
             size={16}
             round />
         </TwitterShareButton>
       </li>
      </ul>
    );
  }
}

export default Buttons;
