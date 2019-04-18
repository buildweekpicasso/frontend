import React from 'react';
import { Link } from 'react-router-dom';
import { CardColumns, Card, CardImg } from 'reactstrap';

export default class Gallery extends React.Component {
  componentDidMount() {
    this.props.fetchGallery();
  }

  render() {
    console.log('render',this.props.gallery)
    if(!this.props.gallery) {return null}
    return (
      <CardColumns>
        {this.props.gallery.map((img, i) =>
          <Card key={i}>
            <a href={img.output_url} target="_blank" rel="noopener noreferrer">
              <CardImg
                id={img.request_key}
                // className='rounded-lg'
                src={img.output_url}
                alt=''
              />
            </a>
          </Card>
        )}
      </CardColumns>
    )
  };
}