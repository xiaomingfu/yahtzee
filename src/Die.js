import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleLock = this.handleLock.bind(this);
  }
  handleLock() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleLock}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
