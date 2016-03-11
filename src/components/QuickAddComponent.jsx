'use strict';

import React from 'react';
import { Input, Button, Row, Col } from 'react-bootstrap';

require('styles//QuickAdd.less');

class QuickAddComponent extends React.Component {
  render() {
    return (
      <div className="quickAdd">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Input type="textarea" label="Quick Add" placeholder="Add a task here." />
          </Col>
        </Row>

        <Row>
          <Col xs={9} sm={9} md={9} lg={9}>
            <Button>
              ^<i className="fa fa-fw fa-calendar"></i>
            </Button>
            <Button>
              !<i className="fa fa-fw fa-flag"></i>
            </Button>
            <Button>
              #<i className="fa fa-fw fa-list-alt"></i>
            </Button>
            <Button>
              &
              <i className="fa fa-fw fa-tag"></i>
            </Button>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <Button>
              <i className="fa fa-fw fa-plus"></i>
              Quick Add
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

QuickAddComponent.displayName = 'QuickAddComponent';

// Uncomment properties you need
// QuickAddComponent.propTypes = {};
// QuickAddComponent.defaultProps = {};

export default QuickAddComponent;
