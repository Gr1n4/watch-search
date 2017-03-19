"use strict";

import {FILTER_ADD_PARAM} from '../constants/filter';

export const addParamToFilter = () => {
  return {
    type: FILTER_ADD_PARAM,
    payload: null
  }
}