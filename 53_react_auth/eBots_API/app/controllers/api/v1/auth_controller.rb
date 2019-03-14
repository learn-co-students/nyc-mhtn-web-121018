class Api::V1::AuthController < ApplicationController
  def create
    # check to see that this person is who
    # they say they are

    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      jwt = encode_token(user.id)

      render json: {user: UserSerializer.new(user), jwt: jwt}
    else
      render json: {errors: "You dun goofed!"}
    end

    # if they are return user info
    # if they aren't yell at them
  end

  def auto_login
    if logged_in
      render json: curr_user
    else
      render json: {errors: "You dun goofed!"}
    end
  end
end