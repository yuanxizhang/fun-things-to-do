import React from 'react';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import '../index.css';

const TodoList = ( props ) => {
    const todos = props.tasks.map((todo, index) => {
      return <ListGroup.Item><Todo content={todo} key={index} id={index} onDelete={props.onDelete} /></ListGroup.Item>
    })

    return ( 
      <ListGroup variant="flush">
        {todos}
      </ListGroup>
    );
};


export default TodoList;

