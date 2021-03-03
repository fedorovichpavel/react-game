import React from 'react';

export default class ScoreList extends React.Component {
 constructor(props) {
  super(props);
  this.state = {scoreList: this.props.scorelist ? this.props.scorelist : []};
  setInterval(() => {
    this.checkNewGame.call(this);
 }, 1000);
 }

 checkNewGame() {
  if (this.props.newgame) {
    this.setState({scoreList: this.props.scorelist});
 }
 
 console.log()
}

 render() {
  return (
   <div className="score-list">
    <ul className="list-group" style={{width: '30rem',height: '15rem',overflow: 'overlay', margin: '1rem', color: '#000', textAlign:'left'}}>
  <li className="list-group-item" style={{padding:0, fontWeight:900, textAlign:'center'}}>Last 10 game score</li>
  {this.state.scoreList[0] ? this.state.scoreList.map((e,i)=> <li key={i} className="list-group-item" style={{padding: '0 1rem'}}>Игрок <strong>{e[0] ? e[0] : 'Anonimus'}</strong> набрал <strong>{e[1]}</strong> очков {e[2]}.</li>) : <li className="list-group-item" style={{padding: '0 1rem'}}>Результата пока нет, тебе нужно немного поиграть :)</li>}
</ul>
   </div>
  )
 }

}