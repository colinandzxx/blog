import React, { Component } from "react";
import RootRoutes from "./config/router.config";
// import { hot } from "react-hot-loader/root";
// const HotRoutes = hot(RootRoutes);

class App extends Component {
  render() {
    return <div>{RootRoutes}</div>;
  }
}

export default App;
