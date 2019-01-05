import React, { Component } from "react";
import Navigation from "./components/NavComponent";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
