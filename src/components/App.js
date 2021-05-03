import '../styles/App.css';
import React from 'react';
import Navigation from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <h2>Surreal Estate</h2>
      </header>
    </div>
  );
}

export default App;
