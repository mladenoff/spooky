class Api::PlaylistsController < ApplicationController
  def create

  end

  def index
    @playlists = Playlist.all
    render :index
  end
end
