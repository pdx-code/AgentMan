'use strict';

import React from 'react';
import CurrentTimelog from './CurrentTimelogComponent';

require('styles/CurrentTimelogs.less');

class CurrentTimelogsComponent extends React.Component {
  constructor(props) {
    super(props);
    /* this.showDetails = this.showDetails.bind(this); */
  }

  render() {
    var timelogNodes = this.props.current_timelogs.map(function(timelog, i){
      return (
        <CurrentTimelog timelog={timelog} />
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
