import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux'
import { loggedIn, loggedOut, getBarcodeListCompleted, fetchBarcodeList } from '../actions';
import { getBarcodeList } from '../services/apiCall';

const ToolbarContainer = styled.div`
  // TODO: fix this;
  background-color: #2a2c2d;
`

const ToolbarSection = styled.div`
  margin: 15px auto;
  max-width: 1024px;
`;

const Actions = styled.div`
  float: right;
  margin-right: 10px;
`

const LogoAndName = styled.div`
  float: left;
`
const Icon = styled.i`
  font-size: 25px;
  color: #fff;
  line-height: 36px;
  padding: 0 16px;
`

const Name = styled.div`
  height: 36px;
  line-height: 36px;
  float: right;
  padding: 0 8px; 
  color: #fff;
  font-family: 'Rubik', sans-serif;
`

const LoginButton = {
  fontSize: 13
}

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.responseGoogleSuccess = this.responseGoogleSuccess.bind(this);
    this.responseLogoutSuccess = this.responseLogoutSuccess.bind(this);
  }

  async responseGoogleSuccess(object) {
    this.props.dispatch(loggedIn(object));
    this.props.dispatch(fetchBarcodeList(true));
    let list = await getBarcodeList(object.tokenObj.id_token);
    this.props.dispatch(getBarcodeListCompleted(list));
    this.props.dispatch(fetchBarcodeList(false));

  }

  responseLogoutSuccess(object) {
    this.props.dispatch(loggedOut());
  }

  showLoginButton() {
    if (!this.props.loggedIn) {
     return <GoogleLogin
        clientId="983270735462-47najr02dnhj4niuoh91d7mjjjhfitp3.apps.googleusercontent.com"
        buttonText="Login"
        style={LoginButton}
        isSignedIn={true}
        onSuccess={this.responseGoogleSuccess}
        onFailure={this.responseGoogleSuccess} />
    }
    return <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={this.responseLogoutSuccess}
    >
    </GoogleLogout>
  }

  render() {
    return (
      <ToolbarContainer>
        <ToolbarSection>
          <Link to='/'>
            <LogoAndName>
              <Icon className="fa fa-ticket" aria-hidden="true"></Icon>
              <Name>Eventify</Name>
            </LogoAndName>
          </Link>
          <Actions>
            {this.showLoginButton()}
          </Actions>
        </ToolbarSection>
      </ToolbarContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn.loggedIn
  }
}

const connectedToolbar = connect(
  mapStateToProps
)(Toolbar);

export default connectedToolbar;