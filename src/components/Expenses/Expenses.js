import React, { useState } from "react";
import Expense from "./Expense/Expense";

// function Display(props) {
//   if (props.type === "table") {
//     return (
//       <table className="Expenses Display">
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>Amount</td>
//             <td>Type</td>
//             <td>Frequency</td>
//             <td>Start Date</td>
//             <td>End Date</td>
//           </tr>
//         </thead>
//         <tbody>{props.children}</tbody>
//       </table>
//     );
//   } else return <div className="Expenses Display">{props.children}</div>;
// }
// lookup table

function capitalizeFirstLetter(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

let defaultRenderMethod = "table";
let defaultColumns = ["name", "type", "frequency", "amount"];
const Display = {
  Table: function Table(props) {
    console.log("displaying expenses as a table", props);
    return (
      <table>
        {/* header column includes column names */}
        <thead>
          <tr>
            {(props.columns || []).map((column) => {
              return (
                <td>{column.charAt(0).toUpperCase() + column.slice(1)}</td>
              );
            })}
          </tr>
          {(props.expenses || []).map((expense) => {
            return (
              <tr>
                {(props.columns || []).map((column) => {
                  let Component = Expense[capitalizeFirstLetter(column)];
                  console.log("Component", Component);
                  if (!Component) {
                    return null;
                  }
                  return (
                    <td>
                      <Component
                        value={expense[column.toLowerCase()]}
                        onChange={(e) => {
                          props.onChange(e, column);
                        }}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </thead>
      </table>
    );
  },
};
function Expenses(props) {
  let [expenses, updateExpenses] = useState([{ name: "Brian Parsons" }]);
  let RenderExpenses = Display[props?.display?.toUpperCase()] || Display.Table;

  return (
    <div className="Expenses">
      <button>Add Expense</button>
      <RenderExpenses
        columns={props.columns || defaultColumns}
        expenses={expenses}
        onChange={(e, column) => {
          console.log("something changed in expenses", e, column);
        }}
      ></RenderExpenses>
    </div>
  );
}
export default Expenses;
