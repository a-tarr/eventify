import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillReceiveProps() {
    this.setState({ open: this.props.open });
  }

  render() {
    return (
      <div>
        <Dialog title="Login"
          open={this.state.open}
          onRequestClose={this.handleClose}>
        </Dialog>
      </div>
    );
  }
}

export default Login;