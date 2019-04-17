import React from 'react';

export default props => {
  return (
    <div>
      <img src={props.contentImg} />
      <img src={props.styleImg} />
      <img src={props.something} />
    </div>
  )
}