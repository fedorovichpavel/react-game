import React from 'react';

const styles = {
 dropdown: {
  margin: '0.5rem 0.25rem 0.5rem 0.25rem',
    height: 'fit-content'
 },
 dropdownMenu: {
  active:{
   display: 'block',
   right: '2rem',
   left: 'auto'
  },
  notActive: {
   display: 'none',
   left: 'auto',
   right: '2rem'
  }
 }
};

class Settings extends React.Component {
 constructor(props) {
  super(props);
  this.state = {click: false, volume: this.props.volume};
  this.dropDownSet = this.dropDownSet.bind(this);
}

dropDownSet() {
this.setState({click: !this.state.click});
}

onInput(e){
  this.setState({volume: e.target.value});
  this.props.volumeset(this.state.volume);
}

changeIcon() {
  this.state.volume === 0 ? this.setState({volume: 40}) : this.setState({volume: 0});
  setTimeout(() => {
    this.props.volumeset(this.state.volume);
  }, 400);
}

  render() {
   return (
<div className="dropdown" style={styles.dropdown}>
  <button className="btn btn-secondary dropdown-toggle" onClick={this.dropDownSet}>
    Settings
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={this.state.click ? styles.dropdownMenu.active : styles.dropdownMenu.notActive}>
    <div style={{display:'flex'}}><img className='volumeonoff' src={this.state.volume > 0 ? "./volumeon.png" : "./volumeoff.png"} alt='' style={{width:'3rem',height:'3rem', margin:'0.3rem'}} onClick={this.changeIcon.bind(this)}/><input className="rangeinputaudio" type="range" value={this.state.volume} min="0" max="100" onInput={this.onInput.bind(this)} onClick={this.onInput.bind(this)}/></div>
  </div>
</div>
   )
  }
}

export default Settings;