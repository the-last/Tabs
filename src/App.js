import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Tabs, TabPane } from './Tabs';

class App extends Component {
  callback = (v) => {
    console.log(v)
  }
  
  render() {
    return (
      <div className="App">
        
        <div>
          <Tabs defaultActiveIndex={1} onChange={this.callback} >
            <TabPane tab="tab1" order="1" >Content of Tab Pane 1</TabPane>
            <TabPane tab="tab2" order="2" >Content of Tab Pane 2</TabPane>
            <TabPane tab="tab3" order="3" >Content of Tab Pane 3</TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
