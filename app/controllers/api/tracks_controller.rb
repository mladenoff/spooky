class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render :index
  end

  def search
    @tracks = Track.search(search_params[:term])
    render "api/tracks/index"
  end

  private

  def search_params
    params.require(:search).permit(:term)
  end
end
