import React from 'react';

class App extends React.Component {
  render(){
    return(
      <div id="app">
        <h1>Pokedex</h1>
        <div id="generations">
          <h1>Generations</h1>
          <span>Use search for generations to explore your pokemon!</span>
        </div>
      </div>
    )
  }
}

export default App;
