import constants from "./constants";

const locale = {
  locale_id: "number",
  name: "string",
  label: "string",
};

const initialState = {
  locales: [],
};


function getSupportedLocales()


export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.APP_INIT:
    default:
      return state;
  }
}
