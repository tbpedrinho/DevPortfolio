// Importando o React
import React, { Component } from 'react';

// Importando o Component Header
import Header from './components/header/header'
import Main from './main';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default App;