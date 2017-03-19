"use strict";

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionWatch from '../../actions/watch';

import WatchList from '../../containers/watch/watch-list';

class Watch extends Component {

  render() {
    const {watch, actions} = this.props;
    return (
      <div>
        <h1>Магазин наручных часов</h1>
        {/*<WatchSort*/}
          {/*watch={watch}*/}
          {/*{...actions}*/}
        {/*/>*/}
        <WatchList
          watch={watch}
          actions={actions}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    watch: state.watch
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionWatch, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Watch);
