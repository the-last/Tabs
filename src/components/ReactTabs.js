import React, { Component } from 'react';
import './style/homevue.css';
import './style/button.scss';
import { Tabs, TabPane } from './../Tabs';
import DemoFour from './DemoFour'
import DemoTwo from './DemoTwo'

class ReactTabs extends Component {
  render() {
    return (
      <div className="App">
        
        <div>
          <Tabs
            defaultActiveIndex={2}
            position={'left'}
          >
            <TabPane tab="首页" order="1" >Content of Tab Pane 1</TabPane>
            <TabPane tab="新年" order="2" >
              <DemoTwo></DemoTwo>
            </TabPane>
            <TabPane tab="其他" order="3" >Content of Tab Pane 3</TabPane>
            <TabPane tab="位置" order="4" >
              <div>
                <DemoFour></DemoFour>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ReactTabs;
