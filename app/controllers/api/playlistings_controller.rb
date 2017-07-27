class Api::PlaylistingsController < ApplicationController

  def create
    @playlisting = Playlisting.new(playlisting_params)
    @playlisting.user_id = current_user.id

    if @playlisting.save
      render(json: ["Success!"], status: 200)
    else
      render(json: ["Bad news bears"], status: 666)
    end
  end

  private

  def playlisting_params
    params.require(:playlisting).permit(:track_id)
  end

end
