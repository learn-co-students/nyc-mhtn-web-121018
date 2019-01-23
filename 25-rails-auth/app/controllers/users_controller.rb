class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    # byebug
    # strong params
    # create a user
    User.create(user_params) # this will store the actual password
    # this is no longer what we want to do => we don't want that password in the databse
    # salt+hash password <- this is what we want to put in the database

    # bycrypot!!!!

    # TODO: signup
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
