class TweetsApp

  def call
    puts 'Welcome to Twitter'

    puts 'Enter a username:'
    username = gets.chomp # username instances good place, but i;m lazy

    puts 'Enter a message:'
    message = gets.chomp

    # tweet = Tweet.new({'username' => username, 'message' => message})
    # save to the database here, user input
    # tweet.save # this will save to the database, persist info!

    tweet = Tweet.create({'username' => username, 'message' => message})

    tweets = Tweet.all # recalling the tweets
    render(tweets)
  end

  private

  def render(tweets)
    tweets.each.with_index(1) do |tweet, i|
      puts "#{i}. #{tweet.username} says: #{tweet.message}"
    end
  end
end
