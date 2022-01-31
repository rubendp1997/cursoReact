import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({id, url, title}) => {
  return <div className= 'card animate__animated animate__rubberBand'>
      <p>{title}</p>
      <img src={url} alt={title}></img>

  </div>;
};

GifGridItem.propTypes = {};

export default GifGridItem;
