'use strict';

import React from 'react';
import CurrentTimelog from './CurrentTimelogComponent';

require('styles/CurrentTimelogs.less');

class CurrentTimelogsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var timelogNodes = this.props.current_timelogs.map(function(timelog, i){
      return (
        <CurrentTimelog timelog={timelog} key={i} />
      );
    });
    return (
      <div className="currentTimelogs">
        <ul className="currentTimelogs__list">
          {timelogNodes}
        </ul>
      </div>
    );
  }
}

CurrentTimelogsComponent.displayName = 'CurrentTimelogsComponent';

// Uncomment properties you need
// CurrentTimelogsComponent.propTypes = {};
// CurrentTimelogsComponent.defaultProps = {};

export default CurrentTimelogsComponent;
