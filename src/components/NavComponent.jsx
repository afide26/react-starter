import React from "react";

const Navigation = ({ totalCounters: counterPill }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {counterPill}
        </span>
      </a>
    </nav>
  );
};

export default Navigation;
