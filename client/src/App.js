import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

import Routes from "./routes";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
function App(props) {
  console.log("router props", props);
  if (
    props.user.userId == null &&
    !(
      props.location.pathname == Login.route ||
      props.location.pathname == Register.route
    )
  ) {
    return <Redirect to={Login.route}></Redirect>;
  }
  return (
    <div className="App">
      <header className="App-header">hello from header</header>
      <Routes />
    </div>
  );
}
function mapStateToProps(state = {}) {
  return { user: state.user };
}
const mapDispatchToProps = {};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
