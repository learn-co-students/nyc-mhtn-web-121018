class UsersController < ApplicationController
  # skip_before_action :verify_authenticity_token
  # you leave open an attack vector
  # CSRF Token

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    # model
    # response => new.erb
    @user = User.first
  end

  def create
    puts "hello?"
    byebug
    # Too risky
    # User.create(params[:user])
    User.create(user_params) # very strong!
  end

  private

  # strong params
  # require is you being very explicit about what key to pull out of the hash
  # poermit is you whitelisting which keys to use to create/edit your model
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
