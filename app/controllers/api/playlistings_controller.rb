class Api::PlaylistingsController < ApplicationController

  def create
    @playlisting = Playlisting.new(track_id: playlisting_params[:track_id], playlist_id: params[:playlist_id])

    @playlisting.ord = Playlist.find(params[:playlist_id]).tracks.length
    if @playlisting.save
      @playlists = [@playlisting.playlist]
      render 'api/playlists/index/'
    else
      render(json: ["Bad news bears"], status: 666)
    end
  end

  private

  def playlisting_params
    params.require(:playlisting).permit(:track_id)
  end

end
