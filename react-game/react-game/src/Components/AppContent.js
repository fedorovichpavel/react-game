import React from 'react';
import {Cards, CardConteiners} from './Cards';
//import CardConteiners from './CardsConteiners';


function AppContentss() {
 
 function fullScreen() {
  console.log(AppContent);
 }

 return (
  <div>
    <button className="btn btn-secondary" style={{float: 'right', margin: '0.5rem 3rem'}} onClick={fullScreen}>Full</button>
   <Cards />
  </div>
 )
}

const cardsArr = [21,22,23,24,31,32,33,34,41,42,43,44,51,52,53,54,61,62,63,64,71,72,73,74,81,82,83,84,91,92,93,94,101,102,103,104,'j1', 'j2', 'j3', 'j4', 'q1','q2','q3','q4','k1','k2','k3','k4','a1','a2','a3','a4'];
cardsArr.sort(() => Math.random() - 0.5);


export default class AppContent extends React.Component {

 constructor(props) {
  super(props);
  this.state = {};
}

fullScreen(){
 console.log(this.props);
}

deletecard() {
 cardsArr.pop();
}

changeState(e) {
 return e;
}

 render() {
  return (
   <div className="content">
    <button className="btn btn-secondary" id="fullscreenBtn" style={{float: 'right', margin: '0.5rem 3rem'}} onClick={this.fullScreen.bind(this)}>Full</button>
   <Cards cardsarray={cardsArr} deletecard={this.deletecard.bind(this)} changeState={this.changeState.bind(this)}/>
   <CardConteiners cardsarray={cardsArr} deletecard={this.deletecard.bind(this)} changeState={this.changeState.bind(this)}/>
  </div>
  )
 }
}