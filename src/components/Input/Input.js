import React from 'react';

export function Input(props) {
  const { value, validate } = props.input;

  function handleInputChange(evt) {
    props.onInputChange(evt.target.value)
  };

  return(
    <input
      className = {`input ${validate ? '' : 'input_error'} ${props.isValid ? '' : 'input_focus'}`}
      type = "text"
      style = {{left: props.x, top: props.r}} 
      value = {value}
      onChange = {handleInputChange}
    />
  )
}