class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:login, :create]

  def login
    # render :login
  end

  # have't made a session yet
  # make me stateful => implement a session
  def create
    # see if there is a user named that
    @user = User.find_by(username: params[:username])
    # then confirm the password matches the salty hashed password
    # @user =
    # because.. Ruby

    # why do i have no user?
    # short circuit and stop checking after seeing the first false
    if !!@user && @user.authenticate(params[:password])
      # then if it does, send them somewhere
      # hey, you're all good
      session[:user_id] = @user.id # username, user_id, token
        # if you ever allow changing usernames => because it breaks in some use cases
        # user_id
        # token => but where is this stored in the backend?
          # you can eventually store some unique sessiony token somewhere
          # User model? token atrribute
          # Session model
          # file
          # in memory
      redirect_to user_path(@user)
    else
      # otherwise, yell at them, send them somewhere else
      flash[:bad] = "bad, not authenticated" # not too bad
      # wrong username, wrong password <--
      redirect_to login_path
    end
  end

  def destroy
    session.delete(:user_id)
  end
end
