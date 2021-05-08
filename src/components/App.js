import "../styles/App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Properties} />
        <div className="App" />
        <header className="App-header">
          <h2>Surreal Estate</h2>
        </header>
        <Route />
        <Route exact path="add-property" component={AddProperty} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
