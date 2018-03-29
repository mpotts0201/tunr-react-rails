import React, { Component } from 'react';
import axios from 'axios'
import { Card, Image } from 'semantic-ui-react'
import NewArtistForm from './NewArtistForm'
class ArtistListView extends Component {

    state = {
        artists: [],
        artistFormOpen: false
    }

    componentDidMount() {
        this.getAllArtists()
        // Api call to rails
        // Update state
    }

    getAllArtists = async () => {
        const res = await axios.get("/api/artists")
        this.setState({ artists: res.data.artists })
    }

    toggleArtistForm = () => {
        this.setState({ artistFormOpen: !this.state.artistFormOpen })
    }

    render() {
        return (
            <div>

                <h1>All Artists</h1>
                <button onClick={this.toggleArtistForm}>New Artist</button>
                {
                    this.state.artistFormOpen
                
                    ? <NewArtistForm />
            
                    : null
                }
                {this.state.artists.map(artist => {
                    return (
                        <div>
                            <a href={`/artists/${artist.id}`}>{artist.name}</a>
                            <Image>
                                
                            </Image>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ArtistListView;

// Get all artists from artist api 
// show aall artists 
// Users can click on artist and visit single artst 