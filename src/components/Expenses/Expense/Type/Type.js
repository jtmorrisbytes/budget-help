import React from "react";

function Type(props) {
  return (
    <div className="Type">
      <label>Type:</label>
      <select onChange={props.onChange} value={props.value || "none"}>
        <option value={"none"}>Select an option</option>
        <option value={"loan"}>Loan</option>
      </select>
    </div>
  );
}

export default Type;
