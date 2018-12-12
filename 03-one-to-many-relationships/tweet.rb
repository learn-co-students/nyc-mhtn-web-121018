class Tweet
  attr_reader :message, :user

  @@all = []

  # Tweet#message that returns a string <= super vague, what does this mean?
  # def message
  #   # "cool is this the right answer?"
  #   @message
  # end

  # Tweet#user that returns an instance of the user class
  # def user
  #   @user
  # end

  # Tweet.all that returns all the Tweets created.
  def self.all
    @@all
  end

  def initialize(message, user)
    @message = message
    @user = user

    @@all << self
  end

  # Tweet#username that returns the username of the tweet's user
  def username
    self.user.username # @user.username
  end

end # end of Tweet class
