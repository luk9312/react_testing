import React from 'react';
import './App.css';
import VisibleTodoList from './todoList/List/display';
import AddTodo from './todoList/input/todoInput';
import Footer from './todoList/footer/Footer';



const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);



export default App;