import React, { Component } from 'react';
import moment from 'moment';
import './style/homevue.css';
import './style/button.scss';
import { Tabs, TabPane } from './../Tabs';

class ReactTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timedown: {},
      position: 'top'
    }
  }
  callback = (v) => {
    console.log(v)
  }
  componentDidMount() {
    this.setState({
      timedown: this.optionAnimation()
    })
    this.validator()
  }
  validator = () => {
    setInterval(() => {
      this.setState({
        timedown: this.optionAnimation()
      })
    }, 1000)
  }
  optionAnimation = () => {
    let mo  = moment( (new Date()).getTime() )
    let day = mo.format('D')
    let hour  = mo.format('HH')
    let min = mo.format('mm')
    let s   = mo.format('ss')
    
    return {
      day, hour, min, s
    }
  }
  switchPosition = () => {
    const {position} = this.state
    if (position === 'top') {
      this.setState({position: 'left'})
    } else {
      this.setState({position: 'top'})
    }
  }
  render() {
    const { position, timedown } = this.state
    const { hour, min, s } = timedown
    return (
      <div className="App">
        
        <div>
          <Tabs
            style={{fontSize: '24px'}} 
            defaultActiveIndex={2} 
            onChange={this.callback} 
            position={position}
          >
            <TabPane tab="首页" order="1" >Content of Tab Pane 1</TabPane>
            <TabPane tab="新年" order="2" >
              <h3>Entry New Year ----</h3>
              <span className="timedown small">What time is it ? </span>
              <span className="timedown">{hour}</span>
              <span className="timedown middle">:{min}</span>
              <span className="timedown small">:{s}</span>
            </TabPane>
            <TabPane tab="其他" order="3" >Content of Tab Pane 3</TabPane>
            <TabPane tab="位置" order="4" >
              <button
                onClick={this.switchPosition} 
                style={{fontSize: '16px'}}>{position === 'top' ? '向左': '向上'}
              </button>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ReactTabs;
