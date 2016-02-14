'use strict';

import React from 'react';
import { Col, Button } from 'react-bootstrap';

require('styles/CurrentTimelogs.less');

class CurrentTimelogsComponent extends React.Component {
  render() {
    return (
      <div className="currentTimelogs">
        <ul className="currentTimelogs__list">
          <li className="currentTimelogs__timelog row">

            <Col style={{'display': 'flex'}} md={9} lg={9}>
              <p style={{'fontWeight': 'bold'}} className="currentTimelog__title"> Dropdown Menu: Add Bottom Bar Highlight for Hover State and Click State</p>
            </Col>
            <Col md={3} sm={3}>
              <div className="currentTimelog__clock">
                <span>00:08:30</span>
                <a className="currentTimelog__clockToggle"><i className="fa fa-fw fa-camera-retro"></i></a>
              </div>
            </Col>

            <Col style={{'backgroundColor': '#333', 'color': 'white', 'height': '190px', 'paddingTop': '10px'}} md={12} sm={12}>
              <div className="currentTimelog__details row">

                <Col md={7} sm={6}>
                  <textarea style={{'width':'100%', 'height': '150px'}}></textarea>
                </Col>

                <Col md={5} sm={6}>
                  <a className="currentTimelog__projectLink" href="#">Henrilloydonline.com | Responsive Design [DEV]</a>
                  <a className="currentTimelog__billingToggle">toggle</a>
                  <br/>
                  <Button>
                    <i className="fa fa-fw fa-camera-retro"></i>
                    Submit
                  </Button>
                </Col>

              </div>
            </Col>
          </li>
        </ul>
      </div>
    );
  }
}

CurrentTimelogsComponent.displayName = 'CurrentTimelogsComponent';

// Uncomment properties you need
// CurrentTimelogsComponent.propTypes = {};
// CurrentTimelogsComponent.defaultProps = {};

export default CurrentTimelogsComponent;
