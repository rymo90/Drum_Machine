import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <Display/>
      <Pad/>
      </div>
    )
  }
}
function Display(){
  return(
    <div id="display">
          <h1>Drum Machine!</h1>
          <h2> Free Code Camp</h2>
    </div>
  )
}
function Pad(){
  return(
    <div className="drum-pad">
    <div className="container">
    <div className="row">
    <div className="col-md-4">
    <button className="drum-pad-Q">Q</button>
    <button className="drum-pad-W">W</button>
    <button className="drum-pad-E">E</button>

    </div>
    <div className="col-md-4">

    <button className="drum-pad-A">A</button>
    <button className="drum-pad-S">S</button>
    <button className="drum-pad-D">D</button>
    </div>
    <div className="col-md-4">

    <button className="drum-pad-Z">Z</button>
    <button className="drum-pad-X">X</button>
    <button className="drum-pad-C">C</button>
    </div>

    </div>
    </div>
    </div>

  )
}
export default App;
