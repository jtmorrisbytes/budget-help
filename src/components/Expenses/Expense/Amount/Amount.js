import React, { useState } from "react";
let Amount = function Amount(props) {
  let [edit, updateEdit] = useState(false);

  if (edit) {
    return (
      <div className="Amount">
        <label>Amount: </label>
        <input type="number"></input>
      </div>
    );
  } else {
    return (
      <div className={"Amount"}>
        <div className="label">Amount:</div>{" "}
        <div className="value">{props.value}</div>
      </div>
    );
  }
};
export default Amount;
