import React, { Component } from "react";

const Navbar = ({ countersAmount }) => {
  return (
    <React.Fragment>
      <h3>Amount:</h3>
      <span className="badge badge-success m-1">{countersAmount}</span>
    </React.Fragment>
  );
};

export default Navbar;
