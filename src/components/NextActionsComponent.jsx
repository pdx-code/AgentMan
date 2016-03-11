'use strict';

import React from 'react';
/* import QuickAdd from './QuickAddComponent'; */
import { Row, Col, Input, Button, ButtonInput } from 'react-bootstrap';

require('styles//NextActions.less');

class NextActionsComponent extends React.Component {

  constructor (args) {
    super(args);
  }

  render() {

    var nextActionNodes = this.props.actions.map(function(action){
      return (
        <li className="nextAction">

          <Row>
            <Col xs={2} sm={1} md={1} lg={1}>
                <Button bsStyle='link'><i className="fa fa-fw fa-2x fa-square-o"></i></Button>
            </Col>
            <Col xs={8} sm={9} md={9} lg={9}>


                <div className="nextAction__block">
                  <div className="nextAction__name">
                    <i className="fa fa-fw fa-sticky-note-o"></i>
                    {action.action_id}
                    - This should display the name of the Action
                  </div>
                  <div className="nextAction__parent">
                    <a href="http://www.yahoo.com">
                      <i className="fa fa-fw fa-folder"></i>
                      This shuold be a link to the parent object
                    </a>
                    <br/>
                    <a href="http://google.com">
                      <i className="fa fa-fw fa-link"></i>
                      Link to Project
                    </a>

                    <a href="http://google.com">
                      <i className="fa fa-fw fa-user"></i>
                      Client C. Name
                    </a>
                  </div>
                </div>

              </Col>

            <Col xs={2} sm={2} md={2} lg={2}>
              <div className="nextAction__actions">
                <Button bsStyle="link" className="timelogToggle">
                  <i className="fa fa-2x fa-fw fa-clock-o"></i>
                  <br/>
                  3h 22m
                </Button>
                {/* <DropdownButton bsStyle="link" pullRight noCaret title="..." id="bg-nested-dropdown">
                <MenuItem eventKey="3">
                <i className="fa fa-fw fa-clock-o"></i> Start Timelog
                </MenuItem>

                <MenuItem eventKey="1">
                <i className="fa fa-fw fa-pencil-square-o"></i> Edit Action
                </MenuItem>

                <MenuItem eventKey="2">
                <i className="fa fa-fw fa-link"></i> View TeamPro
                </MenuItem>
                </DropdownButton> */}
              </div>
            </Col>
          </Row>




          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="nextAction__details">
                <div className="nextAction__note">
                  <Input type="textarea" label="Action Notes" placeholder="This is sample text" />
                </div>
                <ButtonInput type="submit">Update</ButtonInput>
              </div>
            </Col>
          </Row>




        </li>
      );
    });

    return (
      <div className="nextActions">
        <ul className="nextActions__list">
          {nextActionNodes}
        </ul>
        {/* <QuickAdd/> */}
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
