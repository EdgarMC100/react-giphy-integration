import React from 'react'
import GifGridItem from '../GifGridItem/GifGridItem';
import getGifs from '../../Helpers/getGifs'

export default class GifGridC extends React.Component{
  constructor(props){
    super(props);
    this.state = { images: []};
  }
  
  componentDidMount(){
    getGifs(this.props.category).then( gifs =>this.setState({ images:gifs }));
  }
  //getGifs(this.props.category).then(this.setState);
  render(){
    return(
      <>
	<h1>{ this.props.category }</h1>
	<div className="cards">
	  {
	    this.state.images.map( image => <GifGridItem key={image.id} {...image}/>)
	  }
	</div>
      </>
    );
  }
}
