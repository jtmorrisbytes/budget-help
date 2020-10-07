import React, { useState } from "react";
let Amount = function Amount(props) {
  let [edit, updateEdit] = useState(false);

  if (edit) {
    return (
      <div className="Amount">
        <input
          type="number"
          onChange={props.onChange}
          tabIndex={1}
          onBlur={() => {
            if (typeof props.doneEditing === "function")
              props.doneEditing(props.value);
            updateEdit(false);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              if (typeof props.doneEditing === "function")
                props.doneEditing(props.value);
              updateEdit(false);
            } else if (e.key === "Escape") {
              if (typeof props.cancelEdit === "function") {
                props.cancelEdit();
              }
              updateEdit(false);
            }
          }}
          min={0}
        ></input>
      </div>
    );
  } else {
    return (
      <div className={"Amount"}>
        <div
          className="value"
          onClick={() => {
            updateEdit(true);
          }}
        >
          {props.value}
        </div>
      </div>
    );
  }
};
function Label(props) {
  return <div className="Amount Label">Amount</div>;
}
Amount.Label = Label;

export default Amount;
