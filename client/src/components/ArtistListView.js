import React, { Component } from 'react'
import axios from 'axios'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FlexCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  align-content: flex-start;
`

class ArtistListView extends Component {
  state = {
    artists: []
  }

  componentDidMount () {

    // Initiate API call to Rails
    // When successful, update the state
    this.getAllArtists()
  }

  getAllArtists = async () => {
    const response = await axios.get('/api/artists')
    this.setState({ artists: response.data.artists })
  }

  render () {
    return (
      <div>
        <h1>All Artists</h1>
        <FlexCards>
          {this.state.artists.map(artist => {
            return (
              <Card key={artist.id}>
                <Link to={`/artist/${artist.id}`}>
                  <Image src={artist.photo_url}/>
                  <Card.Content>
                    <Card.Header>{artist.name}</Card.Header>
                    <Card.Meta>{artist.nationality}</Card.Meta>
                  </Card.Content>
                </Link>
              </Card>
            )
          })}
        </FlexCards>
      </div>
    )
  }
}

export default ArtistListView

// Get all of our Artists from Rails API
// We want to show all of the artists once it's fetched.
// Users should be able to click on an artist and visit the single artist page.
