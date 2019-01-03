import React, { Component } from 'react';
import moment from 'moment';
import './style/homevue.css';
import './style/button.scss';

class DemoTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timedown: {}
    }
    this.interval = null
  }
  
  componentDidMount() {
    this.setState({
      timedown: this.optionAnimation()
    })
    this.validator()
  }
  componentWillUnmount() {
    clearInterval(this.interval)
    this.interval = null
  }
  validator = () => {
    this.interval = setInterval(() => {
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
    const { timedown } = this.state
    const { hour, min, s } = timedown
    return (
      <div >
        <h3>Entry New Year ----</h3>
        <span className="timedown small">What time is it ? </span>
        <span className="timedown">{hour}</span>
        <span className="timedown middle">:{min}</span>
        <span className="timedown small">:{s}</span>
      </div>
    );
  }
}

export default DemoTwo;
