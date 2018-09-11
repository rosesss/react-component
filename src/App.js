import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/index'
class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
            <Button type='primary' size='small' icon='talk'>主要按钮</Button>
          </div>
          <div className="App">
            <Button type='primary' size='mini' icon='add'>次要按钮</Button>
          </div>
          <div className="App">
            <Button type='primary' size='big'>次要按钮</Button>
          </div>
          <div className="App">
            <Button type='primary' icon='add' circle='true'></Button>
          </div>
          <div className="App">
            <Button type='default' icon='add' circle='true'></Button>
          </div>
          <div className="App">
            <Button type='default' size='small' icon='talk'>主要按钮</Button>
          </div>
          <div className="App">
            <Button type='default' size='mini' icon='add'>次要按钮</Button>
          </div>
          <div className="App">
          </div>
      </div> 
      
    );
  }
}

export default App;
