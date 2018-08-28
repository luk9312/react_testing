import React from 'react';
// import PropType from 'prop-types';
import {connect} from 'react-redux';
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

const TodoList = (props) => (
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
);


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter((todo) => todo.completed);
    case 'active':
      return todos.filter((todo) => !todo.completed);
    default:
      throw new Error (`unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos,ownProps.filter)
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
) (TodoList);


export default VisibleTodoList;