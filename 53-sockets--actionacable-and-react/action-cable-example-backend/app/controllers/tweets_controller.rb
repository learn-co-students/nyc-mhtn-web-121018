class TweetsController < ApplicationController

  def create
    tweet = Tweet.new(content: params[:content], feed_id: 1)
    if tweet.save
      # Send a message out to all my subscribers anyone who is listening on a certain channel
      # what channel to broadcast to, what message to send (payload)
      ActionCable.server.broadcast('feed', tweet)
      render json: tweet
    else
      render json: {error: 'Could not create that tweet'}, status: 422
    end
  end

end
