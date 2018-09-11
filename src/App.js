import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/index'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type='primary'  circle='false' >1212</Button>
      </div>
    );
  }
}

export default App;
