import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  }
  //Write a method that is dependent on state
  renderTags() {
    return this.state.tags.length === 0 ?
      <p>There are no tags</p>
      : <ul>{this.state.tags.map((tag, i) => (<li key={tag}>{tag}</li>))}</ul>;
  }
  render() {
    return (
      <React.Fragment>
        {/* Write another expression that will render based on state with the && operand */}
        {this.state.tags.length === 0 && 'Please create a new tag!'}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;