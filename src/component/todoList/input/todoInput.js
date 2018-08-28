import React from 'react';
// import PropType from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../../../actions/index';



let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => {
          input = node;
        }}
        onKeyPress={(event) => {
          if(event.key === 'Enter'){
            if (input.value.length > 0) {
              dispatch(addTodo(input.value));
              input.value = '';
            }
          }
        }} />
        <button onClick ={() => {
          if (input.value.length > 0) {
            dispatch(addTodo(input.value));
            input.value = '';
          }
        }}>
          Add Todo
        </button>
    </div>
  );
};

AddTodo = connect() (AddTodo);

export default AddTodo;