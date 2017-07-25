import React, { Component } from 'react';
import styled from 'styled-components';
import { getVouchers } from '../services/apiCall';
import RaisedButton from 'material-ui/RaisedButton';
import './input.css';

const InputBox = styled.textarea`
  resize: none;
  margin: 25px 10px 10px;
  padding: 10px;
  min-width: 250px;
  min-height: 100px;
  //box-shadow: inset 0 0 0 1px #707070;
  border-radius: 3px;
`;

const StyledButton = styled(RaisedButton)`

`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      fetching: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleClick(event) {
    this.setState({fetching: true});
    try {
      var x = await getVouchers(this.state.value);
    } catch (err)
    {
      this.setState({fetching: false}); 
    }
    this.setState({fetching: false}); 
  }

  render() {
    let display = null;
    if (!this.state.fetching) {
      display =
      <div>
        <InputBox placeholder="Paste your links here!" value={this.state.value} onChange={this.handleChange} />
        <br />
        <StyledButton primary onClick={this.handleClick} label="Get my vouchers" />
      </div>
    } else {
      display = <div className="spinner" />
    }
    return (
      <div>
        {display}
      </div>
    );
  }
}

export default Input;