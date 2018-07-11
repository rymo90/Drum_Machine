import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <Display/>

      </div>
    )
  }
}
function Display(){
  return(
    <div id="display">
          <h1>World!</h1>
    </div>
  )
}
export default App;
