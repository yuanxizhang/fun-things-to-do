import React, { Component } from 'react';
import { connect } from 'react-redux';
 
 class CreateTodo extends Component {
  state = {
    content: ''
  };
 
  handleChange = event => {
    this.setState({
      content: event.target.value
    });
  };
 
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.content}
            />
          </p>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
 
export default connect()(CreateTodo);
