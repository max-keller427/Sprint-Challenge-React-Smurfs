import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import NavBar from "./components/NavBar";

import axios from "axios";
import { Route, NavLink, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }

  updateSmurfs = newSmurf => {
    this.setState({ smurfs: newSmurf });
  };

  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <Route
          path="/smurf-form"
          render={props => <SmurfForm updateSmurfs={this.updateSmurfs} />}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
