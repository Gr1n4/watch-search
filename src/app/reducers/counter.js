"use strict";

export default function counterReducer(state = 0, {type, payload}) {
  switch (type) {
    case 'ADD_COUNTER':
      return state + 1;
    case 'MINUS_COUNTER':
      return state;
    default:
      return state;
  }

}
