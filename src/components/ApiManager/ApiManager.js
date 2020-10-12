/* 
    ApiManager.js
    this is the root component of the network layer,
    seperating the view layer from requests.

    the goal of this component is to provide
    all child components making api calls
    with neccessary configuation data
    all in one place.
  
*/
import React, { useState } from "react";
import { Context } from "../Expenses/Api";

const {
  REACT_APP_API_PROTOCOL,
  REACT_APP_API_HOST,
  REACT_APP_API_PORT,
  REACT_APP_API_BASE_PATH,
  NODE_ENV,
} = process.env;

const INITIAL_CONTEXT = {
  API_PROTOCOL: REACT_APP_API_PROTOCOL
    ? REACT_APP_API_PROTOCOL
    : NODE_ENV === "production"
    ? "https"
    : "http",
  API_HOST: REACT_APP_API_HOST ? REACT_APP_API_HOST : "localhost",
  API_PORT: REACT_APP_API_PORT ? REACT_APP_API_PORT : "8080",
  API_BASE_PATH: REACT_APP_API_BASE_PATH ? REACT_APP_API_BASE_PATH : "/api",
};

const ManagerContext = React.createContext(INITIAL_CONTEXT);

function ApiManager(props) {
  const [context, updateContext] = useState(INITIAL_CONTEXT);
  return (
    <ManagerContext.Provider value={context}>
      {props.children}
    </ManagerContext.Provider>
  );
}
function connect(Component) {
  console.debug("ApiManager Connecting component", Component);
  return function ApiManagerConnected(props) {
    console.debug("creating ApiManagerConnected with props", props);
    return (
      <ManagerContext.Consumer>
        {(context) => {
          return (
            <Component
              {...props}
              API_PROTOCOL={context.API_PROTOCOL}
              API_PORT={context.API_PORT}
              API_HOST={context.API_HOST}
              API_BASE_PATH={context.API_BASE_PATH}
              API_URL={`${context.API_PROTOCOL}://${context.API_HOST}:${context.API_PORT}${context.API_BASE_PATH}`}
            />
          );
        }}
      </ManagerContext.Consumer>
    );
  };
}

ApiManager.Consumer = ManagerContext.Consumer;
ApiManager.connect = connect;
export default ApiManager;
