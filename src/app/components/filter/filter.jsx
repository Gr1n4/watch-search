"use strict";

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionFilter from '../../actions/filter';

class Filter extends Component {

  render() {
    return (
      <div>
        <h1>Filter</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionFilter, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
