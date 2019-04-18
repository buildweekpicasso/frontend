import React from 'react';

export default props => {
  return (
    <div>
      <a href={`https://www.facebook.com/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" id='fb-share'>
        <i className="fab fa-facebook"></i>
      </a>{` `}
      <a href={`https://twitter.com/intent/tweet?related=ShreyasJothish,valogonor,matt_poloni,likothecat&url=${window.location.href}&hashtags=PicassoPaintedIt`} target="_blank" rel="noopener noreferrer" id='tw-share'>
        <i className="fab fa-twitter-square"></i>
      </a>{` `}
      <a href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=${props.output_url}`} target="_blank" rel="noopener noreferrer" id='pin-share'>
        <i className="fab fa-pinterest"></i>
      </a>
    </div>
  )
}