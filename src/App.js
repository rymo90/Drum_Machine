import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Hello />
            </div>
            <div className="col-md-6">

              <World />
            </div>
          </div>
        </div>

      </div>
    )
  }
}
function Hello(){
  return(
    <div className="Hello">
          <h1>Hello</h1>
    </div>
  )
}
function World(){
  return(
    <div className="World">
          <h1>World!</h1>
    </div>
  )
}
export default App;
