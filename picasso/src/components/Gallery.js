import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Fade, CardColumns, Card, CardImg } from 'reactstrap';
import SocialSharing from './SocialSharing';

export default class Gallery extends React.Component {
  componentDidMount() {
    this.props.fetchGallery();
  }

  render() {
    if(!this.props.gallery) {return null}
    return (
      <div>
        <Row className='justify-content-between' style={{padding: '1em'}}>
          <h3 style={{display: 'inline'}}>Gallery</h3>{` `}
          <SocialSharing />
        </Row>
        <Row>
          {/* <Col>
          </Col> */}
          <CardColumns>
            {this.props.gallery.map((img, i) =>
              <Fade key={i}>
                <Card>
                  <a href={img.output_url} target="_blank" rel="noopener noreferrer">
                    <CardImg
                      id={img.request_key}
                      // className='rounded-lg'
                      src={img.output_url}
                      alt=''
                    />
                  </a>
                </Card>
              </Fade>
            )}
          </CardColumns>
        </Row>
      </div>
    )
  };
}