'use strict';

import React from 'react';
/* import { Col } from 'react-bootstrap'; */

require('styles/RecentTimelogs.less');

class RecentTimelogsComponent extends React.Component {
  render() {
    var timelogNodes = this.props.timelogs.map(function(timelog){
      return (
        <li key={timelog.timelog_id} className="recentTimelogs__timelog">

          <a className="currentTimelog__toggle" href="#" >
            <i className="fa fa-2x fa-fw fa-clock-o"></i>
          </a>

          <div className="currentTimelog__title"> {timelog.timelog_id} - this is the timelog name. </div>

          <div className="recentTimelog__clock">
            <span>{timelog.duration_string}</span>
          </div>

        </li>
      );
    });
    return (
      <div className="recentTimelogs">
        <ul className="recentTimelogs__list">
          {timelogNodes}
        </ul>
      </div>
    );
  }
}

RecentTimelogsComponent.displayName = 'RecentTimelogsComponent';

// Uncomment properties you need
// RecentTimelogsComponent.propTypes = {};
// RecentTimelogsComponent.defaultProps = {};

export default RecentTimelogsComponent;
