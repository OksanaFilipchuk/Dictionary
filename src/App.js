import React from "react";
import logo from './logo.svg';
import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Dictionary />
      <footer>
        <p>Coded by <a href ="https://github.com/OksanaFilipchuk">Oksana Filipchuk</a></p>
      </footer>
    </div>
  );
}

export default App;
