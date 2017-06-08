import React, { Component } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import poster from '../images/still_01.jpg';
import backgroundVideo from '../images/okovi_bg.webm';
import classNames from 'classnames';

export class Background extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className={classNames('background', {
        'background--hidden': this.state.loading,
        'animated-in': !this.props.hidden,
        'animated-out': this.props.hidden,
      })}>
        <Video autoPlay loop muted
          controls={[]}
          onCanPlayThrough={() => {
            this.setState({ loading: false });
          }}
          poster={poster}>
          <source src={backgroundVideo} type="video/webm" />
          </Video>
      </div>
    )
  }
}

export default Background;
