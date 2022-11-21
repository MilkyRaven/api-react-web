import './App.css';
import { Routes, Route} from "react-router-dom";
import Main from './pages/Main';
import Series from './pages/Series'
import Character from './pages/Character'
import Type from './pages/Type'
import Categories from './components/Categories'

function App() {
  return (
    <div className='App'>
      <Categories />
      <Routes>
        <Route path="/" element={<Main/>}/>
        {/* <Route path="/series" element={<Series/>}/> */}
        {/* <Route path="/character" element={<Character/>}/>
        <Route path="/type" element={<Type/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
