import React from 'react';
import PropTypes from 'prop-types';

class AddCategory extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
      text : 'Enter some text'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //const { setCategories } = this.props;
  }
  handleInputChange ( e ) {
    console.log( e.target.value );
    this.setState( { text: e.target.value } )
  }

  handleSubmit ( e ) {
    e.preventDefault();
    this.props.setCategories( cats => [`${this.state.text}`, ...cats ] )
    this.setState({ text : '' });
    //console.log(e.target.value);

  }
  render () {
    return(
	<form onSubmit = { this.handleSubmit }>
	  <input 
	    type = "text"
	    value = { this.state.text }
	    onChange = { this.handleInputChange }     
	  />
	</form>
    );
  }
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};
export default AddCategory;
