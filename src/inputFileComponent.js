import React, { Component } from 'react';

export default class FileInputComponent extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label>Input a json File</label>
          <input type="file" onChange={(e) => this.props.inputChangeHandler(e)} />
          <p className="help-block">Help Text</p>
        </div>
      </form>
    );
  }
}