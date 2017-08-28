import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-family: 'Rubik', sans-serif;
  font-size: 37px;
  color: #fff;
`

class Header extends Component {
  render() {
    return (
      <div>
        <Title>
          Eventify
        </Title>
      </div>
    );
  }
}

export default Header;