import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import GifGridItem from '../GifGridItem/GifGridItem'
export const GifGrid = ( { category } ) => {
  
  const {loading, data} = useFetchGifs(category);

 return(
    <>
      <h1>{category}</h1>
      { loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="cards ">
	{
	  data.map( image => 
	    <GifGridItem key={image.id} {...image}/>
	  )
	}
      </div>
    </>
 ) 
}
