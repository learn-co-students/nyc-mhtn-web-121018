class User
  attr_reader :username

  #initialize which takes a username
  #and has a reader method for the username
  # third: set the data
  def initialize(username)
    @username = username
  end

  #tweets that returns an array of Tweet instances
  def tweets
    # Tweet.all # right answeer?
    # this user's tweets
    Tweet.all.select do |tweet| # Tweet instance
      tweet.user == self
    end
  end

  #post_tweet that takes a message,
  # creates a new tweet,
  # and adds it to the user's tweet collection xxxxxx
  def post_tweet(message)
    Tweet.new(message, self)
  end

end # end of User class
