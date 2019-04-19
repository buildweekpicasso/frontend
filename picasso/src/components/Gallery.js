import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Fade, CardColumns, Card, CardImg, Spinner } from 'reactstrap';
import SocialSharing from './SocialSharing';

export default class Gallery extends React.Component {
  componentDidMount() {
    this.props.fetchGallery();
  }

  render() {
    return (
      <div>
        <Row className='justify-content-between' style={{padding: '1em'}}>
          <h3 style={{display: 'inline'}}>Gallery</h3>{` `}
          <SocialSharing />
        </Row>
        <Row>
          { !this.props.fetchingGallery
              ? <CardColumns>
                  {this.props.gallery.map((img, i) =>
                    <Fade key={i}>
                      <Card>
                        <Link to={`/result/${img.request_key}`}>
                          <CardImg
                            id={img.request_key}
                            src={img.output_url}
                            alt=''
                          />
                        </Link>
                      </Card>
                    </Fade>
                  )}
                </CardColumns>
              : <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
              <Spinner size='xl' color='dark' style={{ height: '3em', width: '3em' }} />
            </div>
          }
          
        </Row>
      </div>
    )
  };
}