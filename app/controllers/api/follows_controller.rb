class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(playlist_id: params[:playlist_id])
    @follow.user_id = current_user.id
    if @follow.save
      @user = @follow.follower
      render 'api/users/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow
      .where(playlist_id: params[:playlist_id], user_id: current_user.id)[0]
    if @follow.destroy
      @user = @follow.follower
      render 'api/users/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

end
