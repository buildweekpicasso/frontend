import React from 'react';
import { Collapse, Fade, Media } from 'reactstrap';

export default props => {
  return (
    <Collapse isOpen={}>
      <Fade>
        <Media className='mt-3'>
          <Media left middle
            href={props.previewImg}
            target='_blank'
          >
            <Media object className='mr-3 img-thumbnail' src={props.previewImg} alt='Click to view full size image' style={{maxWidth: '200px', backgroundColor: 'white'}} />
          </Media>
          <Media className='align-self-center'>
            <Media body>
              {props.contentImg !== null
                  && props.contentImg.name}
            </Media>
          </Media>
        </Media>
      </Fade>
    </Collapse>
  )
}