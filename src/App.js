import React, { Component } from 'react';
import GridComponent from './gridComponent';
import FileInputComponent from './inputFileComponent';
// import request from './fetch';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  inputChangeHandler(e) {
    // console.log(e.target.files[0]);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0]);
    const self = this;
    fileReader.onload = () => {
      const data = JSON.parse(fileReader.result);
      self.setState({data})
    }
  }
  render() {
    return (
      <div className="App">
        <FileInputComponent inputChangeHandler={this.inputChangeHandler}/>
        <GridComponent data={this.state.data}/>
      </div>
    );
  }
}

export default App;
