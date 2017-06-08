import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Container from './components/Container';
import Background from './components/Background';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Background hidden={this.props.location.pathname === '/video'} />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
