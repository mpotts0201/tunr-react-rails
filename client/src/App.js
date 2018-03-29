import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ArtistListView from './components/ArtistListView'
import SingleArtistView from './components/SingleArtistView'
import NavBar from './components/NavBar'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ArtistListView} />
            <Route path="/artists/:id" component={SingleArtistView} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
