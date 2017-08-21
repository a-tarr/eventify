import React, { Component } from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import Signup from './Signup';
import Login from './Login';

const ToolbarSection = styled.div`
  margin: 8px auto;
  max-width: 1024px;
`;

const Actions = styled.div`
  float: right;
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
  padding: 0 16px; 
  color: #fff;
  font-family: 'Rubik', sans-serif;
`

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpOpen: false,
      loginOpen: false
    }
  }

  render() {
    return (
      <ToolbarSection>
        <LogoAndName>
          <Icon className="fa fa-ticket" aria-hidden="true"></Icon>
          {/* <Name>Eventify</Name> */}
        </LogoAndName>
        <Actions>
          <FlatButton primary onClick={() => this.setState({ loginOpen: true })} label="Login" />&nbsp;
          <FlatButton primary onClick={() => this.setState({ signUpOpen: true })} label="Sign-up" />
          <Signup open={this.state.signUpOpen}/>
          <Login open={this.state.loginOpen}/>
        </Actions>
      </ToolbarSection>
    );
  }
}

export default Toolbar;