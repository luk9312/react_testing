import React from 'react';
import './App.css';
import VisibleTodoList from './todoList/List/display';
import AddTodo from './todoList/input/todoInput';
import Footer from './todoList/footer/Footer';



const App = ({ match }) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      filter={match.params.filter || 'all'}
    />
    <Footer />
  </div>
);



export default App;