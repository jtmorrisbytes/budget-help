import React, { useState } from "react";

function Name(props) {
  let [localEdit, updateLocalEdit] = useState(false);
  if (props.edit || localEdit) {
    return (
      <div className="Name edit">
        <label>Name:</label>
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
        <div className="label">Name:</div>{" "}
        <div
          className="value"
          onClick={(event) => {
            updateLocalEdit(true);
          }}
        >
          {props.value || "(No Name Provided)"}
        </div>
      </div>
    );
  }
}

export default Name;
