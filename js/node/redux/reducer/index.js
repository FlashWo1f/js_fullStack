const { combineReducers } = require('redux')
const filmFilterReducer = require('./filmFilter')
const filmReducer = require('./filmReducer')
module.exports = combineReducers({
  films: filmReducer,
  filter: filmFilterReducer
})