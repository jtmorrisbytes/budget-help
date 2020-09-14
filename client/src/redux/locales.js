import * as constants from "./constants";
import Axios from "axios";
const locale = {
  localeId: "number",
  name: "string",
  label: "string",
};

const initialState = {
  locales: [],
  localeId: 0,
  loading: true,
};

function getSupportedLocalesPending() {
  return {
    type: constants.GET_LOCALES_PENDING,
    payload: null,
  };
}
function getSupportedLocalesResolved(locales = []) {
  return {
    type: constants.GET_LOCALES_RESOLVED,
    payload: locales,
  };
}
export function getSupportedLocales() {
  return function (dispatch) {
    dispatch(getSupportedLocalesPending());

    return Axios.get("/api/locales").then((response) => {
      let locales = response.data.map((locale) => {
        return {
          localeId: locale.locale_id,
          name: locale.name,
          label: locale.label,
        };
      });
      dispatch(getSupportedLocalesResolved(locales));
      return Promise.resolve(locales);
    });
  };
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_LOCALES_PENDING:
      return { ...state, loading: true };
    case constants.GET_LOCALES_RESOLVED:
      return { ...state, locales: action.payload, loading: false };
    case constants.APP_INIT:
    default:
      return state;
  }
}
export default reducer;
