import './App.css';
import React from 'react';
import TodoScreen from "./components/TodoScreen";
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <TodoScreen />
      </div>
      <Nav />
    </div> 
  );
}

export default App;
