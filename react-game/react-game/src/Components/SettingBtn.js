import React from 'react';

const styles = {
 dropdown: {
  height: 'fit-content',
  alignSelf: 'center',
  paddingRight: '2rem'
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
  this.state = {click: false};
  this.dropDownSet = this.dropDownSet.bind(this);
}

dropDownSet() {
this.setState({click: !this.state.click});
}

  render() {
   return (
<div className="dropdown" style={styles.dropdown}>
  <button className="btn btn-secondary dropdown-toggle" type="button" onClick={this.dropDownSet}>
    Settings
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={this.state.click ? styles.dropdownMenu.active : styles.dropdownMenu.notActive}>
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
   )
  }
}

export default Settings;