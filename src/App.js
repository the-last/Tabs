import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import './homevue.css';
import 'antd/dist/antd.css';
import { Tabs, TabPane } from './Tabs';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timedown: {}
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
  render() {
    const { hour, min, s } = this.state.timedown
    return (
      <div className="App">
        
        <div>
          <Tabs style={{fontSize: '32px'}} defaultActiveIndex={2} onChange={this.callback} >
            <TabPane tab="tab1" order="1" >Content of Tab Pane 1</TabPane>
            <TabPane tab="tab2" order="2" >
            <h3>Entry New Year ----</h3>
            <span class="timedown small">What time is it ? </span>
            <span class="timedown">{hour}</span>
            <span class="timedown middle">:{min}</span>
            <span class="timedown small">:{s}</span>
            </TabPane>
            <TabPane tab="tab3" order="3" >Content of Tab Pane 3</TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
