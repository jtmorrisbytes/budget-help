import React, { useState } from "react";
let Amount = function Amount(props) {
  return <div className={"Amount"}>{props.value}</div>;
};
function Label(props) {
  return <div className="Amount Label">Amount</div>;
}
Amount.Label = Label;

export default Amount;
