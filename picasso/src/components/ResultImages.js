import React from 'react';
import { Col, Row, Fade, CardImg } from 'reactstrap';
import SocialSharing from './SocialSharing';

export default class ResultImages extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   output_url: null,
    //   content_url: null,
    //   style_url: null,
    // }
  }

  componentDidMount() {
    this.props.resultImages.request_key !== this.props.match.params.key
      && this.props.fetchRequest(this.props.match.params.key);
  }

  render() {
    if(this.props.resultImages.request_key === null) {
      return <h3 style={{textAlign: 'center'}}>You have no recent results</h3>
    }
    return (
      <div>
        <Row className='justify-content-between' style={{padding: '1em'}}>
          <h3 style={{display: 'inline'}}>Result</h3>{` `}
          <SocialSharing output_url={this.props.resultImages.output_url} />
        </Row>
        <Row>
          <Col>
            <a href={this.props.resultImages.output_url} target="_blank" rel="noopener noreferrer">
              <Fade>
                <CardImg
                  src={this.props.resultImages.output_url}
                  alt=""
                  style={{width: '100%'}}
                />
              </Fade>
            </a>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <h4 className='mt-3'>Content Image</h4>
            <a href={this.props.resultImages.content_url} target="_blank" rel="noopener noreferrer">
              <Fade>
                <CardImg
                  src={this.props.resultImages.content_url}
                  alt="Content"
                  style={{width: '100%'}}
                />
              </Fade>
            </a>
          </Col>
          <Col sm="6">
            <h4 className='mt-3'>Style Image</h4>
            <a href={this.props.resultImages.style_url} target="_blank" rel="noopener noreferrer">
              <Fade>
                <CardImg
                  src={this.props.resultImages.style_url}
                  alt="Style"
                  style={{width: '100%'}}
                />
              </Fade>
            </a>
          </Col>
        </Row>
      </div>
    )
  }
}