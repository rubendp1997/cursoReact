import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetch } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

  const {data:images, loading} = useFetch (category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p className='animate__animated animate__bounceIn animate__infinite	infinite'>Loading...</p>}
      <div className='cardGrid'>
          {
              images.map(
                actual =>{
                  return <GifGridItem 
                  {...actual}
                  key = {actual.id}
                  />
                } 
              )
              
            }
            </div>
            </>
  
  )};

GifGrid.propTypes = {};

export default GifGrid;
