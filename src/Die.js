import React, { Component } from "react";
import "./Die.css";


class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
  }
  constructor(props) {
    super(props);
    this.handleLock = this.handleLock.bind(this);
  }
  handleLock() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { numberWords, val, locked, disabled, rolling } = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if (locked) classes += "Die-locked ";
    if (rolling) classes += "Die-rolling";
    return (
      <i
        className={classes}
        onClick={this.handleLock}
        disabled={disabled}
      />
    );
  }
}

export default Die;
