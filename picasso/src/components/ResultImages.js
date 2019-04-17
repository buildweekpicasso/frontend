import React from 'react';
import { Col, Row } from 'reactstrap';

export default props => {
  return (
    <div>
      <Row className='justify-content-between' style={{padding: '1em'}}>
        <h3 style={{display: 'inline'}}>Result</h3>{` `}
        <div>
          <a href={`https://www.facebook.com/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" id='fb-share'>
            <i className="fab fa-facebook"></i>
          </a>{` `}
          <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&hashtags=PicassoPaintedIt`} target="_blank" rel="noopener noreferrer" id='tw-share'>
            <i className="fab fa-twitter-square"></i>
          </a>{` `}
          <a href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=${props.outputURL}`} target="_blank" rel="noopener noreferrer" id='pin-share'>
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </Row>
      <Row>
        <Col>
          <a href={props.outputURL} target="_blank" rel="noopener noreferrer">
            <img
              src={props.outputURL}
              alt=""
              style={{width: '100%'}}
            />
          </a>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <h4>Content Image</h4>
          <a href={props.contentURL} target="_blank" rel="noopener noreferrer">
            <img
              src={props.contentURL}
              alt="Content"
              style={{width: '100%'}}
            />
          </a>
        </Col>
        <Col sm="6">
          <h4>Style Image</h4>
          <a href={props.styleURL} target="_blank" rel="noopener noreferrer">
            <img
              src={props.styleURL}
              alt="Style"
              style={{width: '100%'}}
            />
          </a>
        </Col>
      </Row>
    </div>
  )
}