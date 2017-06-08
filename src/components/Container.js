import React, { Component } from 'react';

export class Container extends Component {
    render() {
      return (
        <div className="container">
          <div className="wrapper">
            {this.props.children}
          </div>
        </div>
      )
  }
}

export default Container;
