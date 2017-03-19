"use strict";

import {WATCH_GET_LIST} from '../constants/watch';

export const getWatchList = () => {
  return {
    type: WATCH_GET_LIST,
    payload: null
  };
}