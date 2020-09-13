const { createStore, combineReducers } = require("redux");

const { userReducer } = require("./user");

let store = createStore(combineReducers({ user: userReducer }));

module.exports = { default: store, store };
