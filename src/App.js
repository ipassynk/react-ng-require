import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs';
import TabItem from './TabItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Tabs>
            <TabItem name="Tab One">
                <div>Tab One Content</div>
            </TabItem>
            <TabItem name="Tab two">
                <div>Tab Two Content</div>
            </TabItem>
            <TabItem name="Tab three">
                <div>Tab Three Content</div>
            </TabItem>
        </Tabs>
      </div>
    );
  }
}

export default App;
