import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div>
    <Todo />
    <input type="text" />
    <button> Add </button>
    <button> Clear all </button>
    <div> 0 left </div>
    </div>
  );
}

export default App;
