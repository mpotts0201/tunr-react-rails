import React, { Component } from 'react';
import SingleArtistView from './SingleArtistView';

class ArtistListView extends Component {
    render() {
        return (
            <div>
                Hello from ArtistListView
                <SingleArtistView/>
            </div>
        );
    }
}

export default ArtistListView;