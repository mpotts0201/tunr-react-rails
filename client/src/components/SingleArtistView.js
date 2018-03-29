import React, { Component } from 'react'
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
      <div>
        
      </div>
    )
  }
}

export default SingleArtistView
