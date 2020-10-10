import React from "react";

// I eventually want to generate
// this dynamically using metadata provided by the datatabase
function EditView(props) {
  return (
    <select onChange={props.onChange} value={props.value || "none"}>
      <option value={"none"}>Select an option</option>
      <option value={"loan"}>Loan</option>
    </select>
  );
}
function View(props) {
  return <div className="Type">{props.value || props.children}</div>;
}

function Type(props) {
  return props.edit ? <EditView {...props} /> : <View {...props} />;
}
function Label(props) {
  return <div className="Label">Type</div>;
}
export default Type;
