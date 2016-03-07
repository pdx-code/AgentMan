require('styles/custom.less');
require('styles/less/bootstrap.less');

import React from 'react';
import TimelogStore from '../stores/TimelogStore';

import CurrentTimelogs from './CurrentTimelogsComponent';
import RecentTimelogs from './RecentTimelogsComponent';
import { Panel } from 'react-bootstrap';

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
      <Panel style={{'width': '500px', 'margin': '20px auto'}} className="index">
        <CurrentTimelogs current_timelogs={this.state.current_timelogs}/>
        <RecentTimelogs timelogs={this.state.timelogs}/>

        <div className="recentTimelogs"> Recent Timelog List </div>
        <div className="nextActions"> Next Actions </div>
      </Panel>
    );
  }

}

AppComponent.defaultProps = {
};

export default AppComponent;
