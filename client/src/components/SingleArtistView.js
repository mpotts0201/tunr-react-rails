import React, { Component } from 'react'
import { List, Divider, Container, Header, Image } from 'semantic-ui-react'
import axios from 'axios'

class SingleArtistView extends Component {
  state = {
    artist: {},
    songs: []
  }

  componentDidMount () {
    this.getSingleArtist()
  }

  getSingleArtist = async () => {
    const artistId = this.props.match.params.id
    const res = await axios.get(`/api/artists/${artistId}`)
    console.log(res.data)
    this.setState({
      artist: res.data.artist,
      songs: res.data.songs
    })
  }

  render () {
    return (
      <Container>
        <Image src={this.state.artist.photo_url}/>
        <Header>{this.state.artist.name}</Header>
        <h4>Nationality: {this.state.artist.nationality}</h4>
        <Divider />
        <List>
          {this.state.songs.map(song => {
            return (
              <List.Item key={song.id}>
                {song.title}
                <audio controls src={song.preview_url}></audio>
              </List.Item>
            )
          })}
        </List>
      </Container>
    )
  }
}

export default SingleArtistView
