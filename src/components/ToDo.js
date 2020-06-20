import React from 'react';
import './App.css';

const Todo = (props) => {
    return(
      <div className='list-item'>
        {props.content}
        <button class="delete is-pulled-right"></button>
      </div>
    );
  }