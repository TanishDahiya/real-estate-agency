import React from 'react';
import './App.css';
import Home from "./Home"
import {Switch,Route} from "react-router-dom"
import Header from "./Header";
import About from './About';
import Footer from "./Footer";
import Contact from './Contact';


function App() {
  return (
    <div className="app">
      <div className="app_header">
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
