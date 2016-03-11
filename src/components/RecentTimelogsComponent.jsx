'use strict';

import React from 'react';
import { Button, Row, Col, Input } from 'react-bootstrap';
var classNames = require('classnames');

require('styles/RecentTimelogs.less');

class RecentTimelogsComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var timelogNodes = this.props.timelogs.map(function(timelog){

      var detailsClass = classNames({
        'recentTimelog__details': true,
        'recentTimelog__details--active': false
      });

      var action_type_icon = classNames({
        'fa fa-fw fa-square-o': true,
        'fa fa-fw fa-life-ring': false
      });

      return (
        <li key={timelog.timelog_id} className="recentTimelog">

          <Button bsStyle="link" className="recentTimelog__toggle">
            <i className="fa fa-2x fa-fw fa-clock-o"></i>
          </Button>

          <div className="recentTimelog__block">
            <div className="recentTimelog__name">
              <i className={action_type_icon}></i>
              {timelog.timelog_id} - <a>This is the action name for the timelog</a>
            </div>

            <div className="recentTimelog__project">
              <i className="fa fa-fw fa-flag"></i>
              Parent Project
            </div>
          </div>

          <div className="recentTimelog__clock">
            <span>{timelog.duration_string}</span>
          </div>

          <div className={detailsClass}>
            <Row>
            <Col xs={12} sm={12} sm={12}>
              <form className={detailsClass}>
                <Input type="textarea" label="Text Area" placeholder="This is sample text" />

                <ul className="detailList">

                  <li className="detail detail--client">
                    J & M Tank
                    <a href="" className="billableToggle">
                      <span className="fa-stack">
                        <i className="fa fa-dollar fa-stack-1x"></i>
                        <i className="fa fa-ban fa-stack-2x text-danger"></i>
                      </span>
                    </a>
                  </li>

                  <li className="detail detail--log_start">
                    02/12/16 @ 01:30pm
                  </li>
                  <li className="detail detail--tp_link">
                    <a href="" className="">
                      <i className="fa fa-fw fa-link"></i>
                    </a>
                  </li>
                </ul>

                <Input type="submit" label="Update" value="Update"></Input>
              </form>
            </Col>
            </Row>
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
