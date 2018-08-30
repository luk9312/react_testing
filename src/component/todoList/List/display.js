import React, {Component} from 'react';
// import PropType from 'prop-types';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {getVisibleTodos, getIsFetching, getErrorMessage} from '../../../reducers'
import * as actions from '../../../actions';
import FetchError from './FetchError';

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
    fetchTodos(filter).then(()=> console.log('done!'))
  }

  render() {
    const {toggleTodo, errorMessage, todos, isFetching} = this.props
    if(isFetching && !todos.length) {
      return <p>LOADING~~~</p>;
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      );
    }
    return (
      <TodoList 
        todos = {todos}
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
    errorMessage: getErrorMessage(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }
};

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
) (VisibleTodoList));


export default VisibleTodoList;