import React, { Component } from "react";
// import {
//   Link
// } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>{" "}
          </li>
          <li>
            <a href="/business">Business</a>{" "}
          </li>
          <li>
            <a href="/entertainment">Entertainment</a>{" "}
          </li>

          <li>
            <a href="/health">Health</a>{" "}
          </li>
          <li>
            <a href="/science">Science</a>{" "}
          </li>
          <li>
            <a href="/sports">Sports</a>{" "}
          </li>
          <li>
            <a href="/technology">Technology</a>{" "}
          </li>
        </ul>
      </nav>
    );
  }
}
