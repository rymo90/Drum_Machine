import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

const data = [
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
class Drum extends React.Component{
    handleClick= ()=>{
    this.audio.play()
    this.audio.currentTime=0
  }
  render(){
    return(
    <div className="drum-pad"
      id={this.props.id}
      onClick = {this.handleClick}
      >
        <p>{this.props.letter}</p>
        <audio
          ref= {ref => this.audio = ref}
          className="clip"
          id={this.props.id}
          src={this.props.src}>
        </audio>
      </div>
    )
  }
}
class App extends React.Component{
  constructor(props){
    super(props)
  }


  render() {
    return (
      <div id ="drum-machine" >
        <h1 id="display"></h1>
        {data.map(d =>(
          <Drum
            id={d.id}
            letter={d.letter}
            src= {d.src}
            onClick = {this.handleClick}

            />


        ))}
      </div>
    )
  }
}
export default App;
