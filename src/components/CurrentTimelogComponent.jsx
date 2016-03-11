'use strict';

import React from 'react';
/* import { DropdownButton, MenuItem } from 'react-bootstrap'; */
import { Input, Row, Col, Button } from 'react-bootstrap';
var classNames = require('classnames');

require('styles//CurrentTimelog.less');

class CurrentTimelogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
    this.state = {'detail_state': false};
  }

  showDetails() {
    if (this.state.detail_state == false ) {
      this.setState({'detail_state': true});
    } else {
    this.setState({'detail_state': false});
    }
  }

  render() {

    var detailsClass = classNames({
      'currentTimelog__details': true,
      'currentTimelog__details--active': this.state.detail_state
    });

    return (
      <li key={this.props.timelog.timelog_id} className="currentTimelog">
        <Row>
        <Col xs={1} sm={1} md={1}>
          <a className="currentTimelog__clockToggle">
            <i className="fa fa-2x fa-fw fa-square-o"></i>
          </a>
        </Col>


        <Col xs={8} sm={8} md={8}>
          <div className="currentTimelog__block" onClick={this.showDetails}>
            <div className="currentTimelog__name">
              {this.props.timelog.timelog_id}  Lorem Ipsum Hearthley what where you thinking...
            </div>
            <div className="currentTimelog__parent">
              Project Name here
            </div>
          </div>
        </Col>

        <Col xs={3} sm={3} md={3}>
          <div className="currentTimelog__clock">
            <Button bsStyle="link">
              <i className="fa fa-2x fa-fw fa-clock-o"></i>
            </Button>
            <div>00:08:30</div>

          </div>
        </Col>
        </Row>

            <form className={detailsClass}>
        <Row>
          <Col xs={5} sm={5} sm={5}>
              <Input type="textarea" label="Log Note" placeholder="This is sample text" />
          </Col>

          <Col xs={3} sm={3} md={3} lg={3}>
            <li className="detail detail--log_owner">
              <Input type="select" label="Owner" placeholder="Dezmond f">
                <option value="select">Dezmond f</option>
                <option value="other">...</option>
              </Input>
            </li>

            <li className="detail detail--log_type">
              <Input type="select" label="Type" placeholder="Standard">
                <option value="standard">Standard</option>
                <option value="other">...</option>
              </Input>
            </li>
          </Col>

          <Col xs={4} sm={4} md={4} lg={4}>
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
            <Input type="submit" label="" value="Update"></Input>
          </Col>
        </Row>
            </form>
      </li>
    );
  }
}

CurrentTimelogComponent.displayName = 'CurrentTimelogComponent';

// Uncomment properties you need
// CurrentTimelogComponent.propTypes = {};
// CurrentTimelogComponent.defaultProps = {};

export default CurrentTimelogComponent;
