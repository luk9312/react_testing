import React from 'react';
// import PropType from 'prop-types';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {getVisibleTodos} from '../../../reducers'
import {toggleTodo} from '../../../actions/index';


const Todo = (props) => (
  <li
    onClick={props.onClick}
    style={{
      textDecoration:
        props.completed ? 'line-through' : 'none'
    }}
  >
    {props.text}
  </li>
);

const TodoList = (props) => {
  console.log('??', props.todos);
  return (
  <div className="container">
    <p>LIST</p>
    <ul>
      {props.todos.map((todo) =>
        <Todo
          key={todo.id}
          {... todo}
          onClick={() => props.onTodoClick(todo.id)} 
        />
      )}
    </ul>
  </div>
)
};




const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all')
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  {onTodoClick: toggleTodo}
) (TodoList));


export default VisibleTodoList;