import React, { Component } from 'react';
import Header from './components/Header';
import ResultTable from './components/ResultTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import Toolbar from './components/Toolbar';
import { ping } from './services/apiCall';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const AppContainer = styled.div`
  overflow: auto;
  background-color: #3e4245;
  height: 100vh;
  text-align: center; 
`;

const MainBox = styled.div`
  position: relative;
  margin: 50px 15px;
  padding: 20px;
  text-align: center;
  border-radius: 1px;
`;

const BoxContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
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

    //this.displayContent = this.displayContent.bind(this);
    this.getCodesAndPins = this.getCodesAndPins.bind(this);
  }

  componentDidMount() {
    ping();
  }

  getCodesAndPins(codesAndPins) {
    console.log(codesAndPins);
    this.setState({
      displayTable: true,
      barcodes: codesAndPins
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
        <Router>
            <AppContainer>
              <Toolbar />
              <BoxContainer>
                <MainBox>
                  <Route exact path='/' component={Main} />
                </MainBox>
              </BoxContainer>
              <Copyright>© Anthony Tarr - {new Date().getFullYear()}</Copyright>
            </AppContainer>
        </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
