require('styles/custom.less');
require('styles/less/bootstrap.less');

import React from 'react';
import TimelogStore from '../stores/TimelogStore';

import { Button, DropdownButton, MenuItem } from 'react-bootstrap';
import CurrentTimelogs from './CurrentTimelogsComponent';
import RecentTimelogs from './RecentTimelogsComponent';
import NextActions from './NextActionsComponent';

var classNames = require('classnames');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = TimelogStore.getState();
    this.showDetails = this.showDetails.bind(this);
  }

  componentDidMount() {
    /* this.setState({'current_state': true}); */
  }

  showDetails (e) {
    // console.log(e);
    // if (this.state.current_state == true) {
    //   this.setState({'current_state': false});
    // } else {
    //   this.setState({'current_state': false});
    // }
  }
  startTimelog () {
    /*
      send a message to the server if the response is 200
      then update the state
    */
  }

  stopTimelog () {}

  updateTimelog () {}

  deleteTimelog () {}

  render() {
    var currentTimelogClass = classNames({
      'currentTimelog__wrapper': true,
      'currentTimelog__wrapper--active': this.props.current_state
    });
    var recentTimelogClass = classNames({
      'recentTimelogs__wrapper': true,
      'recentTimelogs__wrapper--active': this.props.recents_state
    });
    var nextActionClass = classNames({
      'nextActions__wrapper': true,
      'nextActions__wrapper--active': this.props.actions_state
    });

    return (
      <div style={{'minWidth': this.props.containerSize, 'margin': '20px auto'}} className="index">

        <h3 className="sectionHeader sectionHeader__currentTimelogs">

          <DropdownButton bsStyle="link" noCaret title="..." id="bg-nested-dropdown">
            <MenuItem eventKey="1">
              <i className="fa fa-fw fa-gear"></i> Settings
            </MenuItem>
          </DropdownButton>

          Current Timelogs
        </h3>

        <CurrentTimelogs className={currentTimelogClass} current_timelogs={this.state.current_timelogs}/>

        <h3 className="sectionHeader sectionHeader__recentTimelogs ">
          <DropdownButton bsStyle="link" noCaret title="..." id="bg-nested-dropdown">

            <MenuItem eventKey="1">
              <i className="fa fa-fw fa-gear"></i> Settings
            </MenuItem>

          </DropdownButton>
          Recent Timelogs
        </h3>
        <RecentTimelogs className={recentTimelogClass} timelogs={this.state.timelogs}/>

        <h3 className="sectionHeader sectionHeader__nextActions">
          <DropdownButton bsStyle="link" noCaret title="..." id="bg-nested-dropdown">
            <MenuItem eventKey="1">
              <i className="fa fa-fw fa-plus"></i> New Action
            </MenuItem>

            <MenuItem eventKey="2">
              <i className="fa fa-fw fa-gear"></i> Settings
            </MenuItem>

          </DropdownButton>
        Next Actions
        </h3>
        <NextActions className={nextActionClass} actions={this.state.timelogs}/>
      </div>
    );
  }

}

AppComponent.defaultProps = {
  'containerSize': '500px',
  'current_state': false,
  'recents_state': false,
  'actions_state': false
};

export default AppComponent;
