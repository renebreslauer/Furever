import axios from 'axios';
import React, { useEffect } from 'react';
import AdoptMe from './Components/AdoptMe';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Home from './Components/Home';
import AnimalList from './Components/AnimalList';
import PetDetail from './Components/PetDetail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = () => {
    axios.get(`/api/animals`).then(response => {
  
    });
  };
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/pets/:type">
          <AnimalList />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/petdetail/:petId">
          <PetDetail />
        </Route>
        <Route path="/adoptme">
          <AdoptMe />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

// class App extends React.Component {
//   state = { serverMessage: '' };

//   render() {

export default App;
