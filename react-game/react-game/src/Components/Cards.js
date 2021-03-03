import React from 'react';

export class Cards extends React.Component {
 constructor(props) {
  super(props);
  this.state = JSON.parse(localStorage.getItem('state_cards')) ? JSON.parse(localStorage.getItem('state_cards')) : {array: this.props.cardsarray, cards1: [], cards2: [], cards3: [], cards4: [], trash: [], style1: '0.5rem #00ff4c solid', style2: '0.5rem #00ff4c solid', style3: '0.5rem #00ff4c solid', style4: '0.5rem #00ff4c solid', cont1: 0, cont2: 0,cont3: 0,cont4: 0,a1:false, pressKey: false, volume: this.props.volume()/100}
   this.setState({style1: '0.5rem #00ff4c solid',style2: '0.5rem #00ff4c solid',style3: '0.5rem #00ff4c solid',style4: '0.5rem #00ff4c solid'});
   setInterval(() => {
      this.checkNewGame.call(this);
   }, 1000);
}

_handleKeyDown = (event) => {
   if (!event.repeat) {
      switch( event.key) {
         case '1':
            this.deleteCard.call(this, {target:{id:'cards1'}});
              break;
         case '2':
            this.deleteCard.call(this, {target:{id:'cards2'}});
              break;
          case '3':
            this.deleteCard.call(this, {target:{id:'cards3'}});
              break;
         case '4':
            this.deleteCard.call(this, {target:{id:'cards4'}});
              break;
          case ' ':
            this.deleteCard.call(this, {target:{id:'trash'}});
              break;
          default:
              break;
      }
   }
}

componentDidMount(){
   document.addEventListener("keyup", this._handleKeyDown);
}

componentWillUnmount() {
   document.removeEventListener("keyup", this._handleKeyDown);
}

 checkNewGame() {
    if (this.props.newgame) {this.setState({array: this.props.cardsarray, cards1: [], cards2: [], cards3: [], cards4: [], trash: [], style1: '0.5rem #00ff4c solid', style2: '0.5rem #00ff4c solid', style3: '0.5rem #00ff4c solid', style4: '0.5rem #00ff4c solid', cont1: 0, cont2: 0,cont3: 0,cont4: 0})
    localStorage.setItem('state_cards',JSON.stringify(this.state));
   }
 }

 sound(path){
    this.setState({volume: this.props.volume() /100});
    this.audio = new Audio(path);
    this.audio.volume = this.state.volume;
    this.audio.play();
 }

 deleteCard(event) {
    if (this.state.array.length === 0) { return}
    if (this.state.array.length === 1) {
      this.props.score(this.props.stoptimer());
      }
  const e = event.target.id;
  const conteiner = this.state[e].map(e => {
   if (typeof e == 'string') {return e[0] === 'a' ? (e[1] === 'o' ? 1 : 11) : 10;}  
   else {return +e.toString().slice(0,-1)} });
   const last = this.state.array[this.state.array.length - 1];
   let lastCard = typeof last === 'string' ? (last[0] !== 'a' ? 10 : 11)  : last.toString().slice(0,-1);
  if (this.state.cards1[0]){

  }

  if (this.state[e].length === 6 && e !== 'trash') {
   
  } else {
   if (e === 'trash' && this.state.array.length === 0) {
         return
   } else {
      if (e === 'trash') { 
         this.sound.call(this, "./click.mp3");
      this.setState({[e]: [...this.state[e], this.props.deletecard()]});
      this.setState({array: this.props.cardsarray});
      this.setState({a1: false});
      localStorage.setItem('state_cards',JSON.stringify(this.state))
      if (this.props.cardsarray.length === 51) {this.props.timer()}
      return
   }
    if (conteiner.length !== 0){
     if(conteiner.reduce((a,e) => a+e) + +lastCard <= 21) {
      this.setState({[e]: [...this.state[e], this.props.deletecard()]});
      this.setState({array: this.props.cardsarray});
      this.setState({[`cont${e.slice(-1)}`]: conteiner.reduce((a,e) => a+e) + +lastCard}); 
         if(this.state[e].length === 5) {
            this.props.score(+e.toString().slice(-1)*100);
         this.setState({trash: [...this.state.trash, ...this.state[e], 1]});
         this.setState({[e]: []});
         this.setState({[`cont${e.slice(-1)}`]: 0});
         }
      localStorage.setItem('state_cards',JSON.stringify(this.state))
      this.props.score(10);
      this.sound.call(this, "./click.mp3");
      this.setState({a1: false});
   } else if(lastCard === 11 && conteiner.reduce((a,e) => a+e) + 1 <= 21){
      this.sound.call(this, "./click.mp3");
      console.log('push',conteiner.reduce((a,e) => a+e) + +lastCard);
      let cardA = this.props.deletecard();
      this.setState({[e]: [...this.state[e], cardA[0]+'o'+cardA[1]]});
      this.setState({a1: true});
      this.setState({array: this.props.cardsarray});
      this.setState({[`cont${e.slice(-1)}`]: conteiner.reduce((a,e) => a+e) + 1});
      localStorage.setItem('state_cards',JSON.stringify(this.state))
      this.props.score(10);
   } else {this.wrongChose.call(this, e);}
    }  
    if (conteiner.length === 0) { 
      this.sound.call(this, "./click.mp3");
      this.setState({[e]: [...this.state[e], this.props.deletecard()]});
      this.setState({array: this.props.cardsarray});
      this.setState({[`cont${e.slice(-1)}`]: this.state[`cont${e.slice(-1)}`] + +lastCard});
      this.setState({a1: false});
      localStorage.setItem('state_cards',JSON.stringify(this.state))
      this.props.score(10);
    }
    if (e !== 'trash' && conteiner.length !==0) {
      if (conteiner.reduce((a,e) => a+e) + +lastCard === 21) {
         this.props.score(+e.toString().slice(-1)*100);
         this.setState({trash: [...this.state.trash, ...this.state[e], 1]});
         this.setState({[e]: []});
         this.setState({[`cont${e.slice(-1)}`]: 0});
         localStorage.setItem('state_cards',JSON.stringify(this.state))
         this.sound.call(this, "./success.mp3");
         this.setState({a1: false});
      } 
    }
      
   }
  }
  if (this.props.cardsarray.length === 51) {this.props.timer(); 
   this.setState({a1: false});
}

 }

 wrongChose(e) {
   this.sound.call(this, "./fail.mp3");
    const element = `style${e.slice(-1)}`
    this.setState({[element] : '0.5rem red solid'});
    setTimeout(() => {
      this.setState({[element]: '0.5rem #00ff4c solid'});
    }, 1500);
 }

 render() {
  return(
   <div className="content_block">
<div className="content__cards">
   <div className="card" >
    {this.state.array.map((e,i) => {
     return <img src={`./cards/${e.toString()}.png`} alt='' key={i} style={{width: '100%', left: -i/30+'rem', top: i/50+'rem'}} className="card-face front" />
    })}
   </div>
   <h2 style={{position:'relative', top: '17rem', paddingRight: '2rem'}}>{this.state.array.length}</h2>
  </div>
  <div className="CardConteinters" >
     <div className="cardCont1" style={{border: this.state.style1}} id='cards1' onClick={this.deleteCard.bind(this)}><h2 id='cards1'>{this.state.cont1}</h2>{this.state.cards1.map((e,i) => <img key={i} id='cards1' alt='' src={`./cards/${e}.png`} style={{top:`${-i*12}rem`, left:`${-i/2}rem`}}/>)}</div>
     <div className="cardCont2" style={{border: this.state.style2}} id='cards2' onClick={this.deleteCard.bind(this)}><h2 id='cards2'>{this.state.cont2}</h2>{this.state.cards2.map((e,i) => <img key={i} id='cards2' alt='' src={`./cards/${e}.png`} style={{top:`${-i*12}rem`, left:`${-i/2}rem`}}/>)}</div>
     <div className="cardCont3" style={{border: this.state.style3}} id='cards3' onClick={this.deleteCard.bind(this)}><h2 id='cards3'>{this.state.cont3}</h2>{this.state.cards3.map((e,i) => <img key={i} id='cards3' alt='' src={`./cards/${e}.png`} style={{top:`${-i*12}rem`, left:`${-i/2}rem`}}/>)}</div>
     <div className="cardCont4" style={{border: this.state.style4}} id='cards4' onClick={this.deleteCard.bind(this)}><h2 id='cards4'>{this.state.cont4}</h2>{this.state.cards4.map((e,i) => <img key={i} id='cards4' alt='' src={`./cards/${e}.png`} style={{top:`${-i*12}rem`, left:`${-i/2}rem`}}/>)}</div>
  </div>
    <div className="trash" id='trash' onClick={this.deleteCard.bind(this)}>
    {this.state.trash.map((e,i) => <img key={i} id='trash' alt="" src={`./cards/blue.png`} style={{top:`${i/50}rem`, left:`${-i/30}rem`}}/>)}
    </div>
   </div>
  ) 
 }
}