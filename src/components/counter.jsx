import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeColor()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  getBadgeColor() {
    let classes = "badge m-2 ";
    classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;