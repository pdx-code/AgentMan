'use strict';

import React from 'react';
import { Button, ButtonInput, Row, Col, Input } from 'react-bootstrap';
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
          <Row>
            <Col xs={2} sm={1} md={1} lg={1}>
              <Button bsStyle="link" className="recentTimelog__toggle">
                <i className="fa fa-2x fa-fw fa-clock-o"></i>
              </Button>
            </Col>

            <Col xs={8} sm={9} md={9} lg={9}>
              <div className="recentTimelog__block">
                <div className="recentTimelog__name">
                  <i className={action_type_icon}></i>
                  {timelog.timelog_id} - <a href="#">This is the action name for the timelog</a>
                </div>

                <div className="recentTimelog__project">
                  <i className="fa fa-fw fa-flag"></i>
                  Parent Project
                </div>
              </div>
            </Col>

            <Col xs={2} sm={2} md={2} lg={2}>
              <div className="recentTimelog__clock">
                <Button bsStyle="link" className="timelogToggle">
                  <i className="fa fa-2x fa-fw fa-clock-o"></i>
                  <br/>
                  <span>{timelog.duration_string}</span>
                </Button>
              </div>
            </Col>
          </Row>

          <div className={detailsClass}>

            <form className={detailsClass}>
        <Row>
          <Col xs={5} sm={5} sm={5}>
              <Input type="textarea" label="Log Note" placeholder="This is sample text" />
          </Col>

          <Col xs={7} sm={7} md={7} lg={7}>
            <Row>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Input className="log_owner" type="select" label="Owner" placeholder="Dezmond f">
                  <option value="select">Dezmond f</option>
                  <option value="other">...</option>
                </Input>
              </Col>

              <Col xs={6} sm={6} md={6} lg={6}>
                <Input className="log_type" type="select" label="Type" placeholder="Standard">
                  <option value="standard">Standard</option>
                  <option value="other">...</option>
                </Input>
              </Col>
            </Row>

          </Col>

          <Col xs={6} sm={6} md={6} lg={6}>
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
          </Col>

          <Col xs={12} sm={12} md={12} lg={12}>
            <ButtonInput type="submit" label="" value="Update"></ButtonInput>
          </Col>
        </Row>
            </form>
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
