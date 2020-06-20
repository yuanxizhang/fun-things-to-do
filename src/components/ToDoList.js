import React from 'react';
import './App.css';
import './Todo';

const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
      return <Todo content={todo} key={index} id={index} />
    })
    return( 
      <div className='list-wrapper'>
        {todos}
      </div>
    );
  }