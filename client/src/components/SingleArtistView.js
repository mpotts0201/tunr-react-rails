import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Img = styled.img`
width: 300px;
`


class SingleArtistView extends Component {

    state = {
        artist: {},
        songs: []
    }

    componentDidMount(){

        this.getSingleArtist()
    }

    getSingleArtist = async() => {
        const artistId = this.props.match.params.id
        const res = await axios.get(`/api/artists/${artistId}`)
        this.setState({ 
            artist: res.data.artist,
            songs: res.data.songs
        })
        console.log(res.data)
    }




    render() {
        return (
            <div>
                <Img src={this.state.artist.photo_url}  alt={`${this.state.artist.name}'s Photo`}/>
                <h1>{this.state.artist.name}</h1>
                <h3>{this.state.artist.nationality}</h3>
                {this.state.songs.map((song,i) => {
                    return (
                        <div key={i}>
                            <h4>{song.title}</h4>
                            <audio controls >
                                <source src={song.preview_url} type="audio/mp4"/>
                            </audio>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default SingleArtistView;