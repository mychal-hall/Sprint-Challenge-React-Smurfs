import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navigation from "./components/Navigation";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios.get("http://localhost:3333/smurfs").then(res => {
      const smurfs = res.data;
      this.setState({ smurfs });
    });
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route
          exact
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
