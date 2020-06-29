import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class AddNew extends React.Component {

	  state = { term: '' };

	  handleSubmit = (e) => {
	    e.preventDefault();
	    if(this.state.term === '') return;
	    this.props.onFormSubmit(this.state.term);
	    this.setState({ term: '' });
	  }
	  
	  render() {
	    return(
	      <form onSubmit={this.handleSubmit}>
	        <input 
	          type='text'
	          className='input'
	          placeholder='Enter Item'
	          value={this.state.term}
	          onChange={(e) => this.setState({term: e.target.value})}
	        />
	        <button className='button'>Submit</button>
	      </form>
	    );
	  }
}

export default AddNew;