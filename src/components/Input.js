import React, { Component } from 'react';
import styled from 'styled-components';
import { getVouchers } from '../services/apiCall';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { fetchImmediateBarcodes, fetchImmediateBarcodesComplete, fetchBarcodesLoggedIn, fetchBarcodesLoggedInComplete } from '../actions';
import './input.css';

const Wrapper = styled.div`
  ${'' /* display: flex; */}
  ${'' /* align-items: center; */}
  ${'' /* justify-content: space-between; */}
`

const InputBox = styled.textarea`
  resize: none;
  margin: 25px 10px 10px;
  padding: 10px;
  min-width: 250px;
  min-height: 250px;
  border-radius: 3px;
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleClick(event) {
    let token;
    if (this.props.token) {
      token = this.props.token;
    }
    this.props.dispatch(fetchImmediateBarcodes());
    const codesAndPins = await getVouchers(this.state.value, token);
    this.props.dispatch(fetchImmediateBarcodesComplete(codesAndPins));
  }

  isFetching() {
    if (!this.props.fetching) {
      return (
        <Wrapper>
          <div>
            <InputBox placeholder="Paste your links here!" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div>
            <RaisedButton primary onClick={this.handleClick} label="Get my vouchers" />
          </div>
        </Wrapper>
      )
    } 
    return <div className="spinner" />
  }

  render() {
    return (
      <div>
        {this.isFetching()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetch.fetchingImmediate,
    loggedIn: state.loggedIn.loggedIn,
    token: state.loggedIn.currentUser
  }
}

const connectedInput = connect(
  mapStateToProps
)(Input);

export default connectedInput;