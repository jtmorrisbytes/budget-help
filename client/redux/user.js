const initialState = {
  userId: null,
  localeId: null,
  calendarId: null,
  calendar: null,
};

function userReducer(
  state = initialState,
  action = { type: "", payload: null }
) {
  switch (action.type) {
    default:
      return state;
  }
}

module.exports = { default: userReducer, userReducer };
