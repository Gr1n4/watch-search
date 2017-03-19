"use strict";

import React, {Component} from 'react';

class WatchItem extends Component {

  render() {
    console.log(this.props);
    const {watch} = this.props;
    return (
      <div>
        <h4>{watch.title}</h4>
        <span>{watch.price} &#8381;</span>
      </div>
    )
  }
}

export default WatchItem;