import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-family: 'Rubik', sans-serif;
  font-size: 37px;
  color: #fff;
`
const Icon = styled.i`
  font-size: 30px;
  color: #fff;
  padding-bottom: 10px;
`
class Header extends Component {
  render() {
    return (
      <div>
        <Icon className="fa fa-ticket" aria-hidden="true"></Icon>
        <Title>
          Eventify
        </Title>
      </div>
    );
  }
}

export default Header;