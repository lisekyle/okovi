import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import fetch from 'isomorphic-fetch';

export class Form extends Component {
  constructor() {
    super();
    this.timeout = null;
    this.state = {
      errorMessage: null,
      codeDirty: false,
      codeValid: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.checkCode = this.checkCode.bind(this);
  }

  checkCode(code) {
    const reg = /^[A-Z0-9]{10}$/;
    if (code.match(reg)) {
        this.setState({ codeDirty: true, codeValid: true });
    } else {
        this.setState({ codeDirty: true, codeValid: false });
    }
  }

  handleCodeChange(evt) {
    const value = evt.target.value;
    if (this.state.codeDirty) {
        this.checkCode(value);
    } else {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.checkCode(value);
      }, 500);
    }
  }

  handleClick() {
    const code = this.code.value;
    const endpoint = `http://www.atozmedia.com/common/soundcard/widgetfeed.asp?downloadCode=${code}`;
    fetch(endpoint)
      .then(this.handleSuccess)
      .catch(this.handleError)
  }

  handleSuccess(response) {
    response.text()
      .then(text => {
        if (text.indexOf("Zola Jesus - Okovi") === -1) {
          this.setState({
            errorMessage: "Invalid Code",
          });
        } else {
          this.props.history.push('/video');
        }
      });
  }

  handleError(error) {
    this.setState({
      errorMessage: "Request Failed",
    });
  }

  render() {
    return (
      <div className="form">
        <form>
          <div className="one">
            <input type="text" name="code" placeholder="Code" autoComplete="off" onChange={this.handleCodeChange} ref={code => (this.code = code)} className={this.state.codeValid || !this.state.codeDirty ? '' : 'invalid'} />
          </div>
          <div className="two">
            <input type="button" disabled={!this.state.codeValid} value="Play Video" onClick={this.handleClick} />
          </div>
          {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
          {!this.state.codeValid && this.state.codeDirty && <p>Invalid Code</p>}
        </form>
      </div>
    )
  }
}

export default withRouter(Form);
