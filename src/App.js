import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./routes";
import "antd/dist/antd.css";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
