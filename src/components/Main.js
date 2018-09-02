import React, { Component } from 'react';
import Input from './Input';
import { connect } from 'react-redux'
import ResultTable from './ResultTable';
import LoggedInMain from './LoggedInMain';

class Main extends Component {
  renderContent() {
    if (this.props.loggedIn) {
      return <LoggedInMain />
    } else {
      return this.renderRegular()
    }
  }

  renderRegular() {
    if (!this.props.fetching && this.props.barcodes.length > 0) {
      return (
        <div>
          <ResultTable codesAndPins={this.props.barcodes} />
        </div>
      )
    } else {
      return (
        <div>
          <Input />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn.loggedIn,
    fetching: state.fetch.fetchingImmediate,
    barcodes: state.fetch.barcodes
  }
}

const connectedMain = connect(
  mapStateToProps
)(Main);

export default connectedMain;