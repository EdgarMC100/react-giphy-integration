import React, { useState } from 'react';
import AddCategory from '../AddCategory/AddCategory'
import { GifGrid } from '../GifGrid/GifGrid';
//import GifGridC from '../GifGrid/GifGridC';
const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  return(
    <>
      <h2>GifExpertApp</h2> 
      <AddCategory setCategories = { setCategories } />
      <hr/>
	{
	  categories.map( category => 
	    <GifGrid key = {category} category={category}/>
	  )
	}
    </>
  )
}

export default GifExpertApp;
