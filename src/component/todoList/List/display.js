import React, {Component} from 'react';
// import PropType from 'prop-types';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {getVisibleTodos} from '../../../reducers'
import * as actions from '../../../actions';


class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter)
  }

  render() {
    const {toggleTodo, ...rest } = this.props
    return (
      <TodoList 
        {...rest} 
        onTodoClick={toggleTodo} 
      />
    )
  }
}


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

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
};

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
) (VisibleTodoList));


export default VisibleTodoList;