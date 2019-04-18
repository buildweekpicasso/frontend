import React from 'react';
import { Collapse, Alert } from 'reactstrap';

export default props => {
  return (
    <Collapse isOpen={props.isOpen}>
      <Alert color={props.color} isOpen={props.isOpen}>
        {props.text}
      </Alert>
    </Collapse>
  )
}