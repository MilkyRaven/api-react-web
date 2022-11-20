import './App.css';
import React, {useState} from 'react';
import TodoList from './components/TodoList';

let todoArray =[{id:1, title: 'Do laundry', completed: false}];
function App() {
  const [todos, setTodos] = useState(todoArray)
  
  return (
    <div>
    <TodoList todoList={todos}/>
    <input type="text" />
    <button> Add </button>
    <button> Clear all </button>
    <div> 0 left </div>
    </div>
  );
}

export default App;
