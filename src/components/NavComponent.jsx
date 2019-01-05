import React, { Component } from "react";

class Navigation extends Component {
  render() {
    const { totalCounters: counterPill } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {counterPill}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navigation;
