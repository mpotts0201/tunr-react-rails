class Api::ArtistsController < ApplicationController
    def index 
        @artists = Artist.all
        render json: {
            artists: @artists
        }
    end 

    def show
        @artist = Artist.find(params[:id])
        render json: {
            artist: @artist
        }
    end

    def create

    end 

    def update

    end 

    def destroy
        Artist.find(params[:id]).destroy

        render json: {
            message: "Artist successfully deleted"
        }
    end

end
