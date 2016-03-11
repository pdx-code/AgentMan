require('styles/custom.less');
require('styles/less/bootstrap.less');

import React from 'react';
import TimelogStore from '../stores/TimelogStore';

import { Button } from 'react-bootstrap';
import CurrentTimelogs from './CurrentTimelogsComponent';
import RecentTimelogs from './RecentTimelogsComponent';
import NextActions from './NextActionsComponent';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = TimelogStore.getState();
  }

  componentDidMount() {
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
    return (
      <div style={{'min-width': this.props.containerSize, 'margin': '20px auto'}} className="index">
        <h3 className="sectionHeader sectionHeader__currentTimelogs ">
          Current Timelogs
          <Button bsStyle="link"><i className="fa fa-fw fa-cog"></i></Button>
        </h3>
        <CurrentTimelogs current_timelogs={this.state.current_timelogs}/>

        <h3 className="sectionHeader sectionHeader__recentTimelogs ">Recent Timelogs
          <Button bsStyle="link"><i className="fa fa-fw fa-cog"></i></Button>
        </h3>
        <RecentTimelogs timelogs={this.state.timelogs}/>

        <h3 className="sectionHeader sectionHeader__nextActions">Next Actions
          <Button bsStyle="link"><i className="fa fa-fw fa-cog"></i></Button>
        </h3>
        <NextActions actions={this.state.timelogs}/>
      </div>
    );
  }

}

AppComponent.defaultProps = {
  'containerSize': '600px'
};

export default AppComponent;
