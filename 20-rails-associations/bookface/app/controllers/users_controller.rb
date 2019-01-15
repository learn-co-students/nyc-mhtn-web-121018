class UsersController < ApplicationController
  # skip_before_action :verify_authenticity_token
  # you leave open an attack vector
  # CSRF Token
  before_action :find_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.all
  end

  def show
  end

  def new
    # model
    # response => new.erb
    @user = User.first
  end

  def create
    # model;
    # Too risky
    # User.create(params[:user])
    @user = User.create(user_params) # very strong!
    # respond
    # /users/:id
    # user_path(@user) # @user.id
    # user_path(1)
    # user_path(@user.id)

    redirect_to @user
  end

  def edit
    # model

    # response
    # render :edit
  end

  def update
    @user.update(user_params)
    redirect_to @user
  end

  def destroy # this is your delete
    @user.destroy
    redirect_to users_path
  end

  private

  def find_user
    @user = User.find(params[:id])
  end

  # strong params
  # require is you being very explicit about what key to pull out of the hash
  # poermit is you whitelisting which keys to use to create/edit your model
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
