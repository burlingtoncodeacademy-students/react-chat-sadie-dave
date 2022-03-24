import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/:id' element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
