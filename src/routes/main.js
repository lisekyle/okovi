import React, { Component } from 'react';
import Form from '../components/Form';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

class Main extends Component {
  render() {
    return (
      <div className={classNames({
        'animated-in': this.props.match.isExact,
        'animated-out': !this.props.match.isExact,
      })}>
        <div className="main">
            <div className="title">
              <h1>Okovi</h1>
              <h4>Zola Jesus</h4>
            </div>
        </div>

        <Form/>
      </div>

    );
  }
}

export default withRouter(Main);
