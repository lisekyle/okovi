import React, { Component } from 'react';
import Share from '../components/Share';
import video from '../images/OKOVI_ANNOUNCE_1080p_FINAL.mp4';
import poster from '../images/still_05.jpg';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import classNames from 'classnames';

export class okoviVideo extends Component {
  constructor() {
    super();
    this.state = {
      overlay: false,
    };
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay() {
    this.setState({ overlay: !this.state.overlay });
  }

  render() {
    return (
      <div className={classNames({
        'animated-in': this.props.match.isExact,
        'animated-out': !this.props.match.isExact,
      })}>
        <div className="video">
          <Video autoPlay
            controls={['PlayPause', 'Volume']}
            poster={poster}
            onEnded={this.toggleOverlay}>
            <source src={video} type="video/mp4" />
            </Video>
            {this.state.overlay && <div className="share-overlay">
              <div className="top__wrapper one--share">
                <a className="replay" onClick={this.toggleOverlay}>Replay</a>
                <a
                  className="download"
                  target="_blank"
                  href="http://zolajesus.com/announce.mp4"
                  download="okovi.mp4"
                  title="Okovi"
                  rel="noopener noreferrer"
                >Download</a>
              </div>
              <Share/>

            </div>}
        </div>
      </div>
    )
  }
}

export default okoviVideo;
