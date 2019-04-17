import React from 'react';
import { Col, Row } from 'reactstrap';

export default props => {
  console.log(props.resultImages)
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
          <a href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=${props.resultImages.output_url}`} target="_blank" rel="noopener noreferrer" id='pin-share'>
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </Row>
      <Row>
        <Col>
          <a href={props.resultImages.output_url} target="_blank" rel="noopener noreferrer">
            <img
              src={props.resultImages.output_url}
              alt=""
              style={{width: '100%'}}
            />
          </a>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <h4 className='mt-3'>Content Image</h4>
          <a href={props.resultImages.content_url} target="_blank" rel="noopener noreferrer">
            <img
              src={props.resultImages.content_url}
              alt="Content"
              style={{width: '100%'}}
            />
          </a>
        </Col>
        <Col sm="6">
          <h4 className='mt-3'>Style Image</h4>
          <a href={props.resultImages.style_url} target="_blank" rel="noopener noreferrer">
            <img
              src={props.resultImages.style_url}
              alt="Style"
              style={{width: '100%'}}
            />
          </a>
        </Col>
      </Row>
    </div>
  )
}