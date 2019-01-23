class UsersController < ApplicationController
  # before_action :authorize, only: [:show, :new]


  # don't see until logged in
  def show
    # if they aren't logged in,


    @user = User.find(params[:id])
    # if session[:user_id] == @user.id
    #   render :show
    # else
    #   # redirect to the login
    #   redirect_to login_path
    # end
  end

  # def index
  #   @user = User.find(params[:id])
  #   if session[:user_id] == @user.id
  #     render :index
  #   else
  #     # redirect to the login
  #     redirect_to login_path
  #   end
  # end

  def new
    @user = User.new
  end

  def create
    # byebug
    # strong params
    # create a user
    @user = User.create(user_params) # this will store the actual password
    # this is no longer what we want to do => we don't want that password in the databse
    # salt+hash password <- this is what we want to put in the database

    # bycrypot!!!!

    # TODO: signup
    # redirect_to user_path(@user)
    redirect_to @user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
