import "../styles/App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./NavBar";
import Properties from "./Properties";
import AddProperties from "./AddProperty";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <header className="App-header">
        <h2>Surreal Estate</h2>
      </header>
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperties} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
