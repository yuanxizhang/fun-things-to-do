import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Todo = ( props ) => {
    return (
        <div className='list-item'>
		      {props.content}
		      <Button className="float-right" variant="danger" size="sm" onClick={() => {props.onDelete(props.id)}}>X</Button>
		    </div>
    );
};

export default Todo;

