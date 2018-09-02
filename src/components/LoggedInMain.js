import React, { Component } from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import ResultTable from './ResultTable';

class LoggedInMain extends Component {
  renderRegular() {
    if (!this.props.defaultFetching && this.props.immediateBarcodes.length > 0) {
      return (
        <div>
          <ResultTable codesAndPins={this.props.immediateBarcodes} />
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

  renderBarcodes() {
    if (this.props.fetching) {
      return <div className="spinner" />
    } else if (this.props.barcodes.length === 0) {
      return (
        <div>
          You have no barcodes saved. 
        </div>
      )
    }

    return (
      <div>
        <ResultTable codesAndPins={this.props.barcodes} />
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderRegular()}
        {this.renderBarcodes()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    defaultFetching: state.fetch.fetchingImmediate,
    immediateBarcodes: state.fetch.barcodes,
    fetching: state.loggedIn.fetchingSavedBarcodes,
    barcodes: state.loggedIn.savedBarcodes
  }
}

export default connect(mapStateToProps)(LoggedInMain);