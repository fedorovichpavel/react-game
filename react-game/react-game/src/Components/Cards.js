import React, {useState} from 'react';

const cardsArr = [21,22,23,24,31,32,33,34,41,42,43,44,51,52,53,54,61,62,63,64,71,72,73,74,81,82,83,84,91,92,93,94,101,102,103,104,'j1', 'j2', 'j3', 'j4', 'q1','q2','q3','q4','k1','k2','k3','k4','a1','a2','a3','a4'];
cardsArr.sort(() => Math.random() - 0.5);
export function Cards122(props) {
 const [card, setCard] = useState(cardsArr.length);
 function deleteCard() {
  //setCard(cardsArr.length);
  console.log(props);
 }

 //if (card !== cardsArr.length) {setCard(cardsArr.length)};
 return (
  <div className="content__cards">
   <div className="card" onClick={deleteCard} >
    {props.cardsarray.map((e,i) => {
     return <img src={`./cards/${e.toString()}.png`} key={i} style={{width: '100%', left: -i/30+'rem', top: i/50+'rem'}} className="card-face front" />
    })}
   </div>
  </div>
 )
}

export class Cards extends React.Component {
 constructor(props) {
  super(props);
  this.state = {array: this.props.cardsarray}
 }

 deleteCard() {
  //setCard(cardsArr.length);
  console.log(this.props);
  this.props.deletecard();
  this.setState({array: this.props.cardsarray});
 }

 render() {
  return(
   <div>
<div className="content__cards">
   <div className="card" onClick={this.deleteCard.bind(this)} changeState={() => this.props.changeState(this.deleteCard)}>
    {this.state.array.map((e,i) => {
     return <img src={`./cards/${e.toString()}.png`} key={i} style={{width: '100%', left: -i/30+'rem', top: i/50+'rem'}} className="card-face front" />
    })}
   </div>
  </div>
  <div className="CardConteinters">
     <CardCont1 card={cardsarray[cardsarray.length -1]} delete={deletecard} changeState={changeState}/>
     <CardCont2 />
     <CardCont3 />
     <CardCont4 />
  </div>

   </div>
  ) 
 }
}

let Cards1 = [];
let Cards2 = [];
let Cards3 = [];
let Cards4 = [];

function CardCont1(props) {
 const { card } = props;
 const [cards, setCards] = useState(Cards1.length);
 let count = 0;
 function pushImg(event){
  Cards1.push(card);
  cardsArr.pop();
  count+=4;
  setCards(Cards1.length);
  console.log(props.changeState);
  props.changeState();
  //document.querySelector('.card').click();
 }

 return (
 <div className="cardCont1" id='cont1' onClick={Cards1.length > 4 ? eerr : pushImg}>{cards === Cards1.length ? Cards1.map((e,i) => <img key={i} id='cont1' src={`./cards/${e}.png`} style={{top:`${-i*12}rem`, left:`${-i/2}rem`}}/>) : ''}</div>
 ) 
 }

 function CardCont2() {
  const [cards, setCards] = useState(Cards2.length);
  let count = 0;
  function pushImg(event){
   Cards2.push(cardsArr[cardsArr.length-1]);
     cardsArr.pop();
   count+=4;
   setCards(Cards2.length);
   document.querySelector('.card').click();
  }
 
  return (
  <div className="cardCont2" id='cont2' onClick={Cards2.length > 4 ? eerr : pushImg}>{cards === Cards2.length ? Cards2.map((e,i) => <img key={i} id='cont1' src={`./cards/${e}.png`} style={{top:`${-i*12}rem`, left:`${-i/2}rem`}}/>) : ''}</div>
  ) 
  }

  function CardCont3() {
   const [cards, setCards] = useState(Cards3.length);
   let count = 0;
   function pushImg(event){
    Cards3.push(cardsArr[cardsArr.length-1]);
     cardsArr.pop();
    count+=4;
    setCards(Cards3.length);
    document.querySelector('.card').click();
   }
  
   return (
   <div className="cardCont3" id='cont3' onClick={Cards3.length > 4 ? eerr : pushImg}>{cards === Cards3.length ? Cards3.map((e,i) => <img key={i} id='cont1' src={`./cards/${e}.png`} style={{top:`${-i*12}rem`, left:`${-i/2}rem`}}/>) : ''}</div>
   ) 
   }

   function CardCont4() {
    const [cards, setCards] = useState(Cards4.length);
    let count = 0;
    function pushImg(event){
     Cards4.push(cardsArr[cardsArr.length-1]);
     cardsArr.pop();
     count+=4;
     setCards(Cards4.length);
     document.querySelector('.card').click();
    }

    return (
    <div className="cardCont4" id='cont4' onClick={Cards4.length > 4 ? eerr : pushImg}>{cards === Cards4.length ? Cards4.map((e,i) => <img key={i} id='cont1' src={`./cards/${e}.png`} style={{top:`${-i*12}rem`, left:`${-i/2}rem`}}/>) : ''}</div>
    ) 
    }

    function eerr(){
     console.log('hvatit')
   }

export function CardConteiners(props) {
 console.log(props, ' prro')
 const {cardsarray, deletecard, changeState} = props;
  return (
   <div />
  )
}