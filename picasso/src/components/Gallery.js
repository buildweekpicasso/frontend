import React from 'react';
import { CardColumns, CardImg } from 'reactstrap';

const Gallery = props => {
  return (
    <CardColumns>
      {this.props.gallery.map(img =>
        <CardImg
          key={img.request_key}
          id={img.request_key}
          className='rounded-lg'
          src={img.output_url}
          alt=''
        />
      )}
    </CardColumns>
  )
}

export default Gallery;