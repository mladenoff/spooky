class Api::PlaylistsController < ApplicationController

  def index
    @playlists = {}

    if params.key?(:user_id)
      @playlists = Playlist.where(user_id: params[:user_id])
      @playlists += Playlist.joins(:follows)
        .where("follows.user_id = ?", current_user.id)
    else
      @playlists = Playlist.all
    end

    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id

    if @playlist.save
      @playlists = [@playlist]
      render :index
    else
      render json: @playlist.errors, status: 422
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title)
  end

end
