import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import News from './components/News/News.js'

function App() {
  

  return (
    <div className="App">
        <h1>
          Hello world!
        </h1>
        <News />
    </div>
  );
}

export default App;
