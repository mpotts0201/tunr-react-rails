import React, { Component } from 'react'
import axios from 'axios'
import { Container, Modal, Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NewArtistForm from './NewArtistForm'

const FlexCards = styled.div`
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
`

class ArtistListView extends Component {
  state = {
    artists: [],
    artistFormOpen: false,
    newArtist: {
      name: '',
      nationality: '',
      photo_url: ''
    },
    error: ''
  }

  componentDidMount () {

    // Initiate API call to Rails
    // When successful, update the state
    this.getAllArtists()
  }

  getAllArtists = async () => {
    try {
      const response = await axios.get('/api/artists')
      this.setState({ artists: response.data.artists })
    } catch (err) {
      console.log(err)
      this.setState({ err: err.message })
    }

  }

  toggleNewArtistForm = () => {
    this.setState({ artistFormOpen: !this.state.artistFormOpen })
  }

  handleChange = (event) => {
    const newArtist = { ...this.state.newArtist }
    const attribute = event.target.name
    newArtist[ attribute ] = event.target.value

    this.setState({ newArtist: newArtist })
  }

  createNewArtist = async (e) => {
    e.preventDefault()
    const response = await axios.post('/api/artists', this.state.newArtist)
    const artists = [ ...this.state.artists, response.data ]
    this.setState({
      artists,
      newArtist: {
        name: '',
        nationality: '',
        photo_url: ''
      }
    })
  }

  render () {
    return (
      <Container>
        <h1>All Artists</h1>
        <Button primary onClick={this.toggleNewArtistForm}>
          Create New Artist
        </Button>
        { this.state.artistFormOpen ? <NewArtistForm createNewArtist={this.createNewArtist} handleChange={this.handleChange} newArtist={this.state.newArtist}/> : null}
        <FlexCards>
          {this.state.artists.map(artist => {
            return (
              <Card key={artist.id}>
                <Link to={`/artists/${artist.id}`}>
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
        {this.state.err}
      </Container>
    )
  }
}

export default ArtistListView

// Get all of our Artists from Rails API
// We want to show all of the artists once it's fetched.
// Users should be able to click on an artist and visit the single artist page.
