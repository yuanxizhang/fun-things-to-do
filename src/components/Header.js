import React from 'react';

const Header = (props) => {
    return(
      <div className='card-header'>
        <h5 className='card-header-title header'>
          You have {props.numTodos} things to do
        </h5>
      </div>
    )
}

export default Header;