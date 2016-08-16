import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs';
import TabItem from './TabItem';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <Tabs>
                    <TabItem name="Tab One">
                        <div>
                            <h1>Tab One Content</h1>
                            <img src="https://placeimg.com/640/480/any"/>
                        </div>
                    </TabItem>
                    <TabItem name="Tab two">
                        <div>
                            <h1>Tab Two Content</h1>
                            <img src="https://placeimg.com/640/480/arch/sepia"/>
                        </div>
                    </TabItem>
                    <TabItem name="Tab three">
                        <div>
                            <h1>Tab Three Content</h1>
                            <img src="https://placeimg.com/640/480/arch/sepia"/>

                        </div>
                    </TabItem>
                </Tabs>
            </div>
        );
    }
}

export default App;
