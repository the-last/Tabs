import React, { Component } from 'react';
import './style/homevue.css';
import './style/button.scss';
import { Tabs, TabPane } from './../Tabs';

class DemoFour extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 'top'
    }
  }
  callback = (v) => {
    console.log(v, '操作的历史记录')
  }
  
  switchPosition = (pos) => {
    pos && this.setState({position: pos})
  }

  render() {
    const { position } = this.state
    
    return (
      <div className="App">
        <h3>
          <button onClick={this.switchPosition.bind(this, 'top')} style={{fontSize: '16px'}}>{'向上'} </button>
          <button onClick={this.switchPosition.bind(this, 'left')} style={{fontSize: '16px'}}>{'向左'} </button>
          <button onClick={this.switchPosition.bind(this, 'right')} style={{fontSize: '16px'}}>{'向右'} </button>
          <button onClick={this.switchPosition.bind(this, 'bottom')} style={{fontSize: '16px'}}>{'向下'} </button>
        </h3>
        <div>
          <Tabs
            defaultActiveIndex={2} 
            onChange={this.callback} 
            position={position}
          >
            <TabPane tab="Tab-1" order="1" >Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab-2" order="2" >
              <span>Content- of tab pane 2</span>
            </TabPane>
            <TabPane tab="Tab-3" order="3" >Content of Tab Pane 3</TabPane>
            <TabPane tab="Tab-4" order="4" >
              <span style={{color: 'red'}}>Content- of tab pane 2</span>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default DemoFour;
