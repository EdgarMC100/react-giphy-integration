import React from 'react';
const GifGridItem = ({id,title,url}) =>{
  return(
    <>
      <div className="card animate__animated animate__bounce">
	<img src = {url}/>
	<p>
	{
	  title.length > 20 ? title.slice(0,19) : title
	}
	</p>
      </div>
    </>
  )
}

export default GifGridItem;
