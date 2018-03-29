import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import ArtistListView from './components/ArtistListView'
import SingleArtistView from './components/SingleArtistView'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          
        <Switch>
          <Route exact path="/" component={ArtistListView} />
          <Route path="/artist/:id" component={SingleArtistView} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
