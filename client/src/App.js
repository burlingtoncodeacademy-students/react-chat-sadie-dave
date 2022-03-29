import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import "./App.css";
import "./normalizer.css";

function App() {
  return (
    <div id="body">
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='/:id' element={<Main />}/> 
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
