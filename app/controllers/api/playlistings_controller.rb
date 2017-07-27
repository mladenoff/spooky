class Api::PlaylistingsController < ApplicationController

  def create
    @playlisting = Playlisting.new(track_id: playlisting_params[:track_id], playlist_id: params[:playlist_id])

    @playlisting.ord = Playlist.find(params[:playlist_id]).tracks.length
    if @playlisting.save
      render(json: ["Success!"], status: 200)
    else
      render(json: ["Bad news bears"], status: 666)
    end
  end

  private

  def playlisting_params
    params.require(:playlisting).permit(:track_id)
    # params.require(:playlisting).permit(:track_id, :playlist_id)
  end
  # Parameters: {"playlist_id"=>"35", "playlisting"=>{"track_id"=>"48"}}

 # Parameters: {"data"=>{"playlist_id"=>"34", "playlisting"=>{"track_id"=>"48"}}, "playlist_id"=>"34"}
end
