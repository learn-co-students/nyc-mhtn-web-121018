class ApplicationController < ActionController::API
  def encode_token(user_id)
    JWT.encode({user_id: user_id}, ENV["JWT_KEY"])
  end

  def token
    request.headers["Authorization"]
  end

  def decode_token
    begin
      JWT.decode(token, ENV["JWT_KEY"])[0]["user_id"]
    rescue
      nil
    end
  end

  def logged_in
    !!curr_user
  end

  def curr_user
    user_id = decode_token

    if user_id
      User.find(user_id)
    else
      nil
    end
  end

  def find_user
    User.find(params[:id])
  end

  def authorized_user
    find_user.id == curr_user.id
  end

  def check_authorization
    if !authorized_user 
      render json: {errors: "Hold your horses bud!"}
    end

  end
end
