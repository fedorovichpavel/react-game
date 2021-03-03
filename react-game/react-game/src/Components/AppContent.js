import React, {useState} from 'react';
import {Cards} from './Cards';
import Score from './Score';
import ScoreList from './ScoreList';
import enterFullscreen from '../fullscreen';
import Settings from './SettingBtn';



function ModalEndGame({gameover, score, pushscore}) {

  const [value, setValue] = useState('');

 function onchange(e){
    setValue(e.target.value);
  }

  return (
   <div className={gameover ? "modal-game active" : "modal-game "}>
    <div className={gameover ? "modal-game__content active" : "modal-game __content"} >
    <h2>Поздравляем, вы набрали {score} очков</h2> 
    <p>Введите ваше Имя</p>
    <form onSubmit={(event)=> event.preventDefault()}>
    <input className='inputscoreN' type="text" placeholder='Как вас зовут?' onChange={onchange}/><button className='btn-submitscore' type="submit" onClick={() => pushscore(value)}>Ok!</button>
      </form>
    </div>
 </div>
  )
 }

export default class AppContent extends React.Component {

 constructor(props) {
  super(props);
  this.state = JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')) : {
    cards: [21,22,23,24,31,32,33,34,41,42,43,44,51,52,53,54,61,62,63,64,71,72,73,74,81,82,83,84,91,92,93,94,101,102,103,104,'j1', 'j2', 'j3', 'j4', 'q1','q2','q3','q4','k1','k2','k3','k4','a1','a2','a3','a4']
  ,score: 0, timer: 300, stoptimer: false, newgame: false, gameover: false, scoreList:[], volume:40};
  this.timers = this.state.timer < 300 ? setInterval(()=> {
    this.setState({timer: this.state.timer - 1});
    localStorage.setItem('state',JSON.stringify(this.state));
  if (this.state.timer === 0 || this.state.stoptimer) {
    clearInterval(this.timers)}
    if (this.state.timer === 0) {this.gameOver.call(this);}
  }, 1000) : null;
  this.setState({cards: this.state.cards.sort(() => Math.random() - 0.5)});
}

deletecard() {
  let arr = this.state.cards;
  let a = arr.pop();
  this.setState({cards: arr});
  localStorage.setItem('state',JSON.stringify(this.state));
  if (this.state.cards.length === 0) {this.gameOver.call(this);}
 return a;
}

sumScore(e) {
this.setState({score: this.state.score += e});
localStorage.setItem('state',JSON.stringify(this.state));
}

stoptimer() {
  this.setState({stoptimer: true});
  localStorage.setItem('state',JSON.stringify(this.state));
  return this.state.timer;
}

timer() {
    this.timers = setInterval(()=> {
      this.setState({timer: this.state.timer - 1});
      localStorage.setItem('state',JSON.stringify(this.state));
    if (this.state.timer === 0 || this.state.stoptimer) {
      clearInterval(this.timers)}
      if (this.state.timer === 0) {this.gameOver.call(this);}
    }, 1000);
}

newGame() {
  let cardsArr = [21,22,23,24,31,32,33,34,41,42,43,44,51,52,53,54,61,62,63,64,71,72,73,74,81,82,83,84,91,92,93,94,101,102,103,104,'j1', 'j2', 'j3', 'j4', 'q1','q2','q3','q4','k1','k2','k3','k4','a1','a2','a3','a4'];
  cardsArr.sort(() => Math.random() - 0.5);
  this.setState({ cards: cardsArr,stoptimer: true, score: 0});
  this.setState({newgame: true});
  setTimeout(() => {
    this.setState({ timer: 300, newgame: false, stoptimer: false });
    localStorage.setItem('state',JSON.stringify(this.state));
  }, 1000);
}

gameOver() {
  this.setState({gameover: true});
  localStorage.setItem('state',JSON.stringify(this.state));
}

pushScore(name) {
  let arr = this.state.scoreList;

  const date = new Date();
  const today = `${date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}.${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}.${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}`;

  let element = [name, this.state.score, today];
  if (arr.length === 10) {
    arr =  [element, ...arr.slice(1)]
  } else {
    arr = [element, ...arr];
  }
  this.setState({scoreList: arr, gameOver: false});
  this.setState({gameover: false});
  localStorage.setItem('state',JSON.stringify(this.state));
  this.newGame.call(this);
}
volumeset(vol) {
  this.setState({volume: vol});
  localStorage.setItem('state',JSON.stringify(this.state));
}

 render() {
  return (
   <div className="content">
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
    <ScoreList scorelist={this.state.scoreList} newgame={this.state.newgame}/>
    <Score value={this.state.score}/>
    <h2 className="h2timer" style={{position: 'relative',top: '8rem',right: '18rem'}}>Timer: {Math.floor(this.state.timer / 60)} : {
    (this.state.timer - 60*Math.floor(this.state.timer / 60)) < 10 ? `0${this.state.timer - 60*Math.floor(this.state.timer / 60)}` : this.state.timer - 60*Math.floor(this.state.timer / 60)
    }</h2>
    <div style={{display:'flex'}}>
    <button className="btn btn-secondary" id="newGame" style={{ margin: '0.5rem 0.25rem 0.5rem 3rem', height: 'fit-content',width: 'max-content'}} onClick={this.newGame.bind(this)}>New game</button>
    <Settings volumeset={this.volumeset.bind(this)} volume={this.state.volume}/>
    <button className="btn btn-secondary" id="fullscreenBtn" style={{ margin: '0.5rem 3rem 0.5rem 0.25rem', height: 'fit-content'}} onClick={enterFullscreen.bind(null, 'fullscr')}>Full</button>
    </div>
        </div>
      <Cards volume={() => this.state.volume > 0 ? this.state.volume : 0.0001} cardsarray={this.state.cards} deletecard={this.deletecard.bind(this)} score={this.sumScore.bind(this)} timer={this.timer.bind(this)} stoptimer={this.stoptimer.bind(this)} newgame={this.state.newgame}/>
      <ModalEndGame gameover={this.state.gameover} score={this.state.score} pushscore={this.pushScore.bind(this)}/>
  </div>
  )
 }
}
