import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const state_machine = {
  green: 'yellow',
  yellow: 'red',
  red: 'green'
};

let current_state = 'green';

const update_light = (state)=>{
  current_state = state;
  // update color

};

const Transition = (state)=>{

}

const CircleLight = (color)=>{
  return(
    <div className = "circle" style={{color: color}}> </div>);
};


function Traffic_light() {
  return(
  <div className = "trafficBox">
    <CircleLight color='green'/>
    <CircleLight color='yellow'/>
    <CircleLight color='red'/>
  </div>);
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
        </header>
        <Traffic_light />
      </div>    
    )}
}

export default App;
