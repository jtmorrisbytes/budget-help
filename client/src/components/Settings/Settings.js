import React from "react";
import { connect } from "react-redux";
function Settings(props) {
  return <div>hello from settings</div>;
}
function mapStateToProps(state = {}) {
  return state;
}
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
