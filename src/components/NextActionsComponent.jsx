'use strict';

import React from 'react';
import QuickAdd from './QuickAddComponent';
import { Input, Button, DropdownButton, MenuItem } from 'react-bootstrap';

require('styles//NextActions.less');

class NextActionsComponent extends React.Component {

  constructor (args) {
    super(args);
  }

  render() {

    var nextActionNodes = this.props.actions.map(function(action){
      return (
        <li className="nextAction">
          <Button bsStyle='link'><i className="fa fa-fw fa-square-o"></i></Button>
          <div className="nextAction__block">
            <div className="nextAction__name">{action.action_id} -Do that thing that we bring to the hammer. Make it really long</div>
            <div className="nextAction__parent">
              <a href="http://www.yahoo.com">
                <i className="fa fa-fw fa-folder"></i> Start Timelog
                parent action if not a milestone
              </a> | <a>parent project</a>
            </div>
          </div>

          <DropdownButton bsStyle="link" pullRight noCaret title="..." id="bg-nested-dropdown">
            <MenuItem eventKey="3">
              <i className="fa fa-fw fa-clock-o"></i> Start Timelog
            </MenuItem>

            <MenuItem eventKey="1">
              <i className="fa fa-fw fa-pencil-square-o"></i> Edit Action
            </MenuItem>

            <MenuItem eventKey="2">
              <i className="fa fa-fw fa-link"></i> View TeamPro
            </MenuItem>
          </DropdownButton>


          <div className="nextAction__details">
            <div className="nextAction__note">
              <Input type="textarea" label="Action Notes" placeholder="This is sample text" />
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className="nextActions">
        <ul className="nextActions__list">
          {nextActionNodes}
        </ul>
        <QuickAdd/>
      </div>
    );
  }
}

NextActionsComponent.displayName = 'NextActionsComponent';

// Uncomment properties you need
NextActionsComponent.propTypes = {};
NextActionsComponent.defaultProps = {
  'open': false
};

export default NextActionsComponent;
