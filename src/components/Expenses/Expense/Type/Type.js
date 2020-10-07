import React from "react";

function Type(props) {
  return (
    <div className="Type">
      <select onChange={props.onChange} value={props.value || "none"}>
        <option value={"none"}>Select an option</option>
        <option value={"loan"}>Loan</option>
      </select>
    </div>
  );
}
function Label(props) {
  return <div className="Label">Type</div>;
}
export default Type;
