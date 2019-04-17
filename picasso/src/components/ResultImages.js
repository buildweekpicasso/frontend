import React from 'react';
import { Col, Row } from 'reactstrap';

export default props => {
  return (
    <div>
      <h4 style={{display: 'inline'}}>Share:</h4>{` `}
      <a href={`https://www.facebook.com/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" id='fb-share'>
        <i class="fab fa-facebook"></i>
      </a>{` `}
      <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" id='tw-share'>
        <i class="fab fa-twitter-square"></i>
      </a>
      <Row>
        <Col sm="8" style={{padding: '0'}}>
          <img
            src={props.outputURL}
            alt=""
          />
        </Col>
        <Col sm="4" style={{padding: '0'}}>
          <img
            src={props.outputURL}
            alt="Content"
            style={{filter: 'hue-rotate(90deg)'}}
          />
          <img
            src={props.outputURL}
            alt="Style"
            style={{filter: 'hue-rotate(180deg)'}}
          />
        </Col>
      </Row>
    </div>
  )
}