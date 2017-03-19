import React from 'react';

import WatchItem from '../../components/watch/watch-item';

const WatchList = ({watch, actions}) => {
  const list = watch.map((item, key) => {
    return (
      <WatchItem
        key={key}
        watch={item}
        {...actions}
      />
    )
  })
  return (
    <div>
      {list}
    </div>
  )
}

export default WatchList;