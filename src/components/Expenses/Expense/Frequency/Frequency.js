import React from "react";

/*
 *
 *
 * Frequencies
 *  most bills occur on fixed dates in a monthly period.
 *  Some bills are billed weekly, bi weekly
 *  Some bills are billed yearly
 *
 *
 *
 */

function Weekly(props) {
  //offset int: number of weeks
  // date:
}

let Frequency = function Frequency(props) {
  return (
    <div className="Frequency">
      <select>
        <option>Weekly</option>
        <option>Bi-Weekly</option>
        <option>Monthly</option>
        <option>Yearly</option>
      </select>
      <label>starting on</label>
      <input type="date" name="startDate" value={props.start} />
    </div>
  );
};

export default Frequency;
