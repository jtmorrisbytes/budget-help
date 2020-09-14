const initialState = {
  userId: null,
  localeId: null,
  calendarId: null,
  calendar: null,
};

export function reducer(
  state = initialState,
  action = { type: "", payload: null }
) {
  switch (action.type) {
    default:
      return state;
  }
}
export default reducer;
