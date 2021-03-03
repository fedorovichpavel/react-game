import React from 'react';

function Modal({active, setActive}) {
 return (
  <div className={active ? "modal-rules active" : "modal-rules"} onClick={setActive}>
   <div className={active ? "modal-rules__content active" : "modal-rules__content"} onClick={e => e.stopPropagation()}>
   <h2>Правила игры в Snood 21:</h2> 
   <p>Нажмите на одно из зеленых полей, чтобы поместить карту из колоды в соответствующую позицию.</p>
   <p>Цель — использовать все карты, набрав 21 очко в любой из четырех колонок.</p>
   <p>Если 5 карт в одной колонке составляют менее 21, считается, что набрано 21 очко.</p>
   <p>Туз равен 1 или 11 очкам. J, Q, K — 10 очков.</p>
   <p>Когда набрано 21 очко, столбец очищается и может быть использован для следующей комбинации.</p>
   <p>Cумма в столбце не может превышать 21 очко, неподходящие карты сбрасываются в красное поле.</p>
   <p>Карты необходимо брать до окончания колоды или истечения времени.</p>
   <p>Стоимость набора 21 очка увеличивается слева направо (100-400 очков).</p>
   <p>Кроме того, Вы получаете дополнительно 50 очков за каждую карту, помещенную в столбец.</p>
   <p>Игра заканчивается по истечении времени (5 минут) или при окончании колоды.</p>
   <p>При окончании колоды, оставшееся время прибавляется к очкам.</p>
   <p><b>Управление с клавиатуры</b>: кнопки <b>1</b>,<b>2</b>,<b>3</b>,<b>4</b> для перемещения карты в соответствующий столбец и <b>пробел</b> для сброса карты.</p>
   </div>
</div>
 )
}

class Rules extends React.Component {
 constructor(props) {
  super(props);
  this.state = {click: false};
}

dropDownSet() {
this.setState({click: !this.state.click});
}

  render() {
   return (
<div className="rulesBtn">
  <button className="btn btn-secondary" onClick={this.dropDownSet.bind(this)}>
    Rules
  </button>
  <Modal active={this.state.click} setActive={this.dropDownSet.bind(this)}/>
</div>
   )
  }
}

export default Rules;