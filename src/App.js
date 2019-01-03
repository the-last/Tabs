import React, { Component } from 'react';
import './App.css';
import ReactTabs from './components/ReactTabs'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ReactTabs></ReactTabs>
        <div style={{
          display: 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          overflowY: 'auto',
            overflowX: 'hidden',
          opacity: 100,
          zIndex: 200000,
          backgroundColor: "rgba(90,90,90,.9)"
        }}>
        <div style={{
          position: "absolute",
          left: '0px',
          right: '0px',
          height: '100%',
          overflowY: "auto",
          zIndex: '30000000'
        }}>

        
          <div style={{
            position: "relative",
            width: '800px',
            height: "auto",
            margin: "0 auto",
            top: '100px',
            backgroundColor: "white"
          }}>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
