import './App.css';
import { Routes, Route} from "react-router-dom";
import Main from './pages/Main';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Home />
      <Main />
      <Routes>
        <Route path="/catalogue" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
