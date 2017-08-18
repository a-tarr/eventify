import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import ResultTable from './components/ResultTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

const AppContainer = styled.div`
  overflow: auto;
  background-color: #3e4245;
  height: 100vh;
  text-align: center; 
`;

const MainBox = styled.div`
  position: relative;
  overflow: hidden;
  margin: 50px 15px;
  padding: 20px;
  text-align: center;
  border-radius: 1px;
`;

const BoxContainer = styled.div`
  margin: 0 auto;
  max-width: 500px;
`

const Copyright = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #888;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTable: false,
      barcodes: []
    }

    this.displayContent = this.displayContent.bind(this);
    this.getCodesAndPins = this.getCodesAndPins.bind(this);
  }

  getCodesAndPins(codesAndPins) {
    console.log(codesAndPins);
    this.setState({
      displayTable: true,
      barcodes: codesAndPins
    });
  }

  displayContent() {
    if (this.state.displayTable) {
      return (
        <div>
          <ResultTable codesAndPins={this.state.barcodes}/>
          <RaisedButton primary onClick={() => this.setState({displayTable: false})} label="Enter more" />
        </div>
        )
    } else {
      return <Input getCodesAndPins={this.getCodesAndPins}/>
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <AppContainer>
          <BoxContainer>
            <MainBox>
              <Header />
              {this.displayContent()}
            </MainBox>
          </BoxContainer>
          <Copyright>© Anthony Tarr - {new Date().getFullYear()}</Copyright>
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}

export default App;
