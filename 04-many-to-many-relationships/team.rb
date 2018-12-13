class Team
  attr_reader :name, :colors
  # attr_accessor :players

  @@all = [] # we don't do this in practice
  # this will be your database table

  def initialize(name, colors) #, players)
    @name = name
    @colors = colors
    # @players = players

    @@all << self
  end

  def self.all
    @@all
  end

  # chicken and egg problem
  # trading? => solved!
  def players # way more efficient
    # self => I need to know who has me
    BasketballPlayer.all.select do |basketball_player| # BasketballPlayer instance
      basketball_player.team == self
    end
  end

end # end of Team class
