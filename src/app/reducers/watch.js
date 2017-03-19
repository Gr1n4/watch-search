"use strict";

const initialState = [
  {
    img: '',
    title: 'watch 1',
    price: '3000',
    id: 'flkjasdlkfja'
  },
  {
    img: '',
    title: 'watch 2',
    price: '5000',
    id: 'lfkjadslkfjal'
  },
  {
    img: '',
    title: 'watch 3',
    price: '7000',
    id: 'lfkjsdalkfjl'
  }
];

export default function watchReducer(state = initialState, {type, payload}) {
  switch (type) {
    default:
      return state;
  }
}
