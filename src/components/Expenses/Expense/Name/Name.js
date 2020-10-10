import React, { useState } from "react";

function Name(props) {
  console.log("Component === Name, props", props);
  let [localEdit, updateLocalEdit] = useState(false);
  if (props.edit || localEdit) {
    return (
      <div className="Name edit">
        <input
          type="text"
          value={props.value}
          onChange={props.onChange}
          tabIndex={0}
          onBlur={(e) => {
            if (typeof props.doneEditing === "function") {
              props.doneEditing(e);
            }
            updateLocalEdit(false);
          }}
        ></input>
        {/* <button>done</button> */}
      </div>
    );
  } else {
    return (
      <div className="Name">
        <div
          className="value"
          onClick={(event) => {
            updateLocalEdit(true);
          }}
        >
          {String(props.value || null)}
        </div>
      </div>
    );
  }
}

Name.Label = function Label(props) {
  return props.edit ? (
    <label>Name:</label>
  ) : (
    <div className="Name Label">Name:</div>
  );
};

export default Name;
