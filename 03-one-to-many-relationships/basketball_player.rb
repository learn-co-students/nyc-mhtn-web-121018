class BasketballPlayer
  attr_accessor :number, :shoe_size, :points, :rebounds, :assists, :steals, :blocks, :slam_dunks, :team
  attr_reader :name
  # attr_writer

  @@all = [] # Array of Player instances

                 # String     Number  Number Number Number    Number   Number  Number  Number
  def initialize(player_name, number, shoe, points, rebounds, assists, steals, blocks, slam_dunks, team)
    @name = player_name
    @number = number
    @shoe_size = shoe
    @points = points
    @rebounds = rebounds
    @assists = assists
    @steals = steals
    @blocks = blocks
    @slam_dunks = slam_dunks
    @team = team

    @@all << self
  end

  # when i run .team, who is running this method?
  # def team # this is also very inefficient
  #   # loop through all the teams
  #   Team.all.find do |team| # Team instance
  #       # find the player associated with that team
  #     team.players.include?(self) # BasketballPlayer instance
  #   end
  #   # then puts the thing
  # end

  def slam_dunk
    self.two_pointer
    @slam_dunks += 1
    "the crowd goes wild!!!"
  end

  def layup
    self.two_pointer
    "boooo!"
  end

  def two_pointer
    # @points += 2
    self.points += 2
  end

  # This was my all_players method
  def self.all
    @@all
  end

  # Arguments:
  #   player_name => String
  # Return => Player instance
  def self.find_player(player_name)
    # self.all in here is the same as Player.all
    # can also use @@all but there is a difference...
    self.all.find do |player| # Player instance
      # String (via getter) # String
      player.name == player_name # Boolean
    end
  end

  # Arguments:
  #   player_name => String
  # Return => Number
  def self.num_points_scored(player_name)
    # Player instance  # String   # getter method
    self.find_player(player_name).points # Number
  end

  # Arguments:
  #   player_name => String
  # Return => Number
  def self.shoe_size(player_name)
    # Player instance  # String   # getter method
    self.find_player(player_name).shoe_size # Number
  end

  # Return => Array of Strings
  def self.player_names
    self.all.map do |player| # Player instance
      player.name # String
    end
  end

  # Return => Array of Player instances
  def self.big_scorers
    self.all.select do |player| # Player instance
      # Number      # Number
      player.points > 10 # Boolean
    end
  end
end # end of Player class
