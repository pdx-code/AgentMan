'use strict';

import React from 'react';
import { Input, DropdownButton, MenuItem } from 'react-bootstrap';

require('styles//CurrentTimelog.less');

class CurrentTimelogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
    this.state = {'detail_state': 'currentTimelog__detail'};
  }

  showDetails() {
    this.state.detail_state = "currentTimelog__detail currentTimelog__details--active";
  }

  render() {
    return (
      <li key={this.props.timelog.timelog_id} className="currentTimelog">
        <a className="currentTimelog__clockToggle">
          <i className="fa fa-2x fa-fw fa-clock-o"></i>
        </a>

        <div className="currentTimelog__block" onClick={this.showDetails}>
          <div className="currentTimelog__name">
            {this.props.timelog.timelog_id} Lorem Ipsum Hearthley what where you thinking...
          </div>
          <div className="currentTimelog__parent">
            Project Name here
          </div>
        </div>

        <div className="currentTimelog__clock">
          <DropdownButton title={this.props.timelog.timelgo_id} id="currentTimelog_menu--">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
          <button>
            <span>00:08:30</span>
            <i className="fa fa-fw fa-pause-circle"></i>
          </button>

        </div>

        <div className="currentTimelog__details">
          <textarea value="This is sample text"></textarea>
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

            <li className="detail detail--tp_link">
              <a href="" className="">
                <i className="fa fa-fw fa-link"></i>
              </a>
            </li>
          </ul>

        </div>
      </li>
    );
  }
}

CurrentTimelogComponent.displayName = 'CurrentTimelogComponent';

// Uncomment properties you need
// CurrentTimelogComponent.propTypes = {};
// CurrentTimelogComponent.defaultProps = {};

export default CurrentTimelogComponent;
