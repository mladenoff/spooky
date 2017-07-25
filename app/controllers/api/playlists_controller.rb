class Api::PlaylistsController < ApplicationController
  def create

  end

  def index
    @playlists = {}
    if params.key?(:user_id)
      @playlists = Playlist.where(user_id: params[:user_id])
    else
      @playlists = Playlist.all
    end
    render :index
  end

end
