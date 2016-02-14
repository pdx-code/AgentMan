require('styles/custom.less');
require('styles/less/bootstrap.less');

/* import $ from 'jquery'; */
import React from 'react';
import CurrentTimelogs from './CurrentTimelogsComponent';
import { Panel } from 'react-bootstrap';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /* var url_base = "https://billing.holodyn.com/modules/addons/wbteampro/api.php"; */
    /* var action = "v1.projects.100.json"; */
    /* var params = ""; */
    /* var url = url_base + "?action=" + action + params; */
    /* Fetch Actions */

    /* $.getJSON('https://www.mockaroo.com/8add9630/download?count=10&key=b5d38960', function(data) { */
    /* var actions = data; */
    /* this.setState({'action': {'actions': ['action', 'action2']}}); */
    /* }).bind(this); */
  }

  render() {
    return (
      <Panel style={{'width': '450px', 'margin': '20px auto'}} className="index">
        <CurrentTimelogs/>
        <div timelogs={this.state.timelogs}> My Action List </div>
      </Panel>
    );
  }

}

AppComponent.defaultProps = {
};

export default AppComponent;
