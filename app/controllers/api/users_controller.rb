class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  def update
    @user = User.find(params[:id])
    if @user && @user.update(user_params)
      render :show 
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar, :profile_header, :website, :headline)
  end
end
