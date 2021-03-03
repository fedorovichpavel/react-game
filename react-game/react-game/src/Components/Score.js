import React from 'react';

export default class AppContent extends React.Component {
 constructor(props) {
  super(props);
  this.state = {score: 0};
 }
 
 render() {
  return (
   <div className="score">
    <h2>Score: {this.props.value}</h2>
   </div>
  )
 }

}


