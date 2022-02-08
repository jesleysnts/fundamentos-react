import './Card.css';
import React from 'react';

export default (props) => {

  const style = {
    backgroundColor: props.color
  }

  return (
    <div className='Card' style={style}>
      <div className='Title'>{props.titulo}</div>
      <div className='Content'>
        {props.children}
      </div>
    </div>
  )
}

