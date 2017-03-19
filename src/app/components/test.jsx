"use strict";

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionCounter from '../actions/counter';

class Test extends Component {
  addCounter() {
    // console.log('test', this.props);
    this.props.test();
  }

  render() {
    console.log(this.props);
    const {counter} = this.props;

    return (
      <div>
        <p>{counter}</p>
        <button onClick={this.addCounter.bind(this)}>++</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCounter, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);