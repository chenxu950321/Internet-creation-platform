import React, { Component } from 'react';
import GlobalStyle from './style';
import Header from './common/header'
import { Provider } from 'react-redux';
import store from './store';


class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Provider store={store}>
          <Header />
          <GlobalStyle />
        </Provider>
      </React.Fragment>
    )
  }
}

export default App;
