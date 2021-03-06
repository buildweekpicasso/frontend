import React from 'react';
import { Spinner, Col, Row, Fade, Card, CardImg } from 'reactstrap';
import SocialSharing from './SocialSharing';

export default class ResultImages extends React.Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.key);
  }

  render() {
    if(this.props.resultImages.request_key === null) {
      return (
        <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
          <Spinner size='xl' color='dark' style={{ height: '3em', width: '3em' }} />
        </div>
      )
    }
    return (
      <div className='mb-3'>
        <Row className='justify-content-between' style={{padding: '1em'}}>
          <h3 style={{display: 'inline'}}>Result</h3>{` `}
          <SocialSharing output_url={this.props.resultImages.output_url} />
        </Row>
        <Row>
          <Col>
            <a href={this.props.resultImages.output_url} target="_blank" rel="noopener noreferrer">
              <Fade>
                <Card>
                  <CardImg
                    src={this.props.resultImages.output_url}
                    alt=""
                    style={{width: '100%'}}
                  />
                </Card>
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
            <a href={`${this.props.testURL}/styles/${this.props.resultImages.style_url}`} target="_blank" rel="noopener noreferrer">
              <Fade>
                <CardImg
                  src={`${this.props.testURL}/styles/${this.props.resultImages.style_url}`}
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