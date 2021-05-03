/* eslint-disable react/react-in-jsx-scope */
import '../styles/App.css';

// component
import Navigation from './NavBar';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <header className="App-header">
        <h2>Surreal Estate</h2>
      </header>
      <Navigation />
    </div>
  );
}

export default App;
