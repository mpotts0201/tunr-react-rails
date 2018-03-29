class Api::ArtistsController < ApplicationController
    def index 
        @artists = Artist.all
        render json: {
            artists: @artists
        }
    end 

    def show
        @artist = Artist.find(params[:id])
        @songs = @artist.songs
        render json: {
            artist: @artist,
            songs: @songs
        }
    end

    def create
        @artist = Artist.create(artist_params)
        render json: {
            artist: @artist
        }
    end 

    def update
        @artist = Artist.find(params[:id])
        @artist.update!(artist_params)
    end 

    def destroy
        Artist.find(params[:id]).destroy

        render json: {
            message: "Artist successfully deleted"
        }
    end

    private

    def artist_params
        params.require(:artist).permit(:name, :photo_url, :nationality)
    end

end
