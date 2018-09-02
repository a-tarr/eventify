import React, { Component } from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import ResultTable from './ResultTable';

class LoggedInMain extends Component {
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
        <div>
          <Input />
        </div>
        {this.renderBarcodes()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.loggedIn.fetchingSavedBarcodes,
    barcodes: state.loggedIn.savedBarcodes
  }
}

export default connect(mapStateToProps)(LoggedInMain);