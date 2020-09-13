import React from "react";
import PropTypes from "react-proptypes";

import { connect } from "react-redux";

class Expenses extends React.Component {
  state = {};
  render() {
    return <div className="Expenses">hello from expenses</div>;
  }
}

function mapStateToProps(state = {}) {
  return state;
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
