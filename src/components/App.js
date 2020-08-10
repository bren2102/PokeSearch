import React from 'react';
import Main from "./main";

class App extends React.Component {

  render(){
    return(
      <div id="app">
        <header>
          <h1>Pokedex</h1>
        </header>
        <Main />
      </div>
    )
  }
}

export default App;
