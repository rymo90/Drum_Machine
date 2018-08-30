import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

const info = [
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
  { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
  { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
  { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
]



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: "23"
    }
    this.handleClick = this.handleClick.bind(this)

  }
  handleClick (event){
    this.setState({
      display: event.target.id
    })
  }


  render() {
    const drum = info.map((data, index) => {
    return <button onClick= {this.handleClick} class="drum-pad" id = {data.letter} >
      <audio class="clip" id= {data.letter} src={data.src} type = "audio/mpeg"></audio>
      <h1>{data.letter}</h1>

    </button>
  })
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="display">
            <h2>Display</h2>
            <h2>{this.state.display}</h2>

          </div>
          {drum }
        </div>

      </div>
    )
  }
}
