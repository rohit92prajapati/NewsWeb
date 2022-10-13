import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News key="general" pagesize={5} category="general" />
        {/* <Router>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<News key="general" pagesize={5} category="general" />}
            />
            <Route
              path="/business"
              element={<News key="business" pagesize={5} category="business" />}
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pagesize={5}
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={<News key="health" pagesize={5} category="health" />}
            />
            <Route
              path="/science"
              element={<News key="science" pagesize={5} category="science" />}
            />
            <Route
              path="/sports"
              element={<News key="sports" pagesize={5} category="sports" />}
            />
            <Route
              path="/technology"
              element={
                <News key="technology" pagesize={5} category="technology" />
              }
            />
          </Routes>
        </Router> */}
      </div>
    );
  }
}

export default App;
