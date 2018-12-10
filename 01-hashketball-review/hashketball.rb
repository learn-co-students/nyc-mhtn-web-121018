require 'pry' # pulls in all the pry code

puts "#1 Hello"
# binding.pry

# I have multiple binding.prys
# will it do something else?
  # didn't call that method
  # method definition, so not run
  # uses the ones in main instead of in the method defintions

# 1. reruns game_hash
# 2. starts from the beginning

# gives you the hash of the game
 def game_hash
   {
     home: {
       team_name: "Brooklyn Nets",
       colors: ["Black", "White"],
       players: [
         {
           player_name: "Alan Anderson",
           number: 0,
           shoe: 16,
           points: 22,
           rebounds: 12,
           assists: 12,
           steals: 3,
           blocks: 1,
           slam_dunks: 1
         }, {
           player_name: "Reggie Evans",
           number: 30,
           shoe: 14,
           points: 12,
           rebounds: 12,
           assists: 12,
           steals: 12,
           blocks: 12,
           slam_dunks: 7
         }, {
           player_name: "Brook Lopez",
           number: 11,
           shoe: 17,
           points: 17,
           rebounds: 19,
           assists: 10,
           steals: 3,
           blocks: 1,
           slam_dunks: 15
         }, {
           player_name: "Mason Plumlee",
           number: 1,
           shoe: 19,
           points: 26,
           rebounds: 12,
           assists: 6,
           steals: 3,
           blocks: 8,
           slam_dunks: 5
         }, {
           player_name: "Jason Terry",
           number: 31,
           shoe: 15,
           points: 19,
           rebounds: 2,
           assists: 2,
           steals: 4,
           blocks: 11,
           slam_dunks: 1
         }
       ]
     },
     away: {
       team_name: "Charlotte Hornets",
       colors: ["Turquoise", "Purple"],
       players: [
         {
           player_name: "Jeff Adrien",
           number: 4,
           shoe: 18,
           points: 10,
           rebounds: 1,
           assists: 1,
           steals: 2,
           blocks: 7,
           slam_dunks: 2
         }, {
           player_name: "Bismak Biyombo",
           number: 0,
           shoe: 16,
           points: 12,
           rebounds: 4,
           assists: 7,
           steals: 7,
           blocks: 15,
           slam_dunks: 10
         }, {
           player_name: "DeSagna Diop",
           number: 2,
           shoe: 14,
           points: 24,
           rebounds: 12,
           assists: 12,
           steals: 4,
           blocks: 5,
           slam_dunks: 5
         }, {
           player_name: "Ben Gordon",
           number: 8,
           shoe: 15,
           points: 33,
           rebounds: 3,
           assists: 2,
           steals: 1,
           blocks: 1,
           slam_dunks: 0
         }, {
           player_name: "Brendan Haywood",
           number: 33,
           shoe: 15,
           points: 6,
           rebounds: 12,
           assists: 12,
           steals: 22,
           blocks: 5,
           slam_dunks: 12
         }
       ]
     }
   }
 end

# How do I get one big array of all the players?
# I want a set of steps to eventually give me back
# one big array of all the home and away players together.
  # let's push into one big array
    # create a variable empty array
    # push game_hash into the empty array
    # push players into the array?

    # iterate through each of the two player arrays
    # shovel into the new array on each iteration

    # maybe start higher up, iterate through home first?

    # iterate down to the players arrays
    # iterate through them with map, then flatten them

    # array method called merge!
    # use that to combine the two

    # so i have a big thing of data (hash)
    game_hash
    # I will ask it for the home players => give me a list
    home_players = game_hash[:home][:players] # Array of the home player hashes
    # I will also ask it for the away players => give me a list
    away_players = game_hash[:away][:players]
    # then I will magically combine them
    # flatten, merge, add them!
    # total_players all_players players
    all_players = home_players + away_players

# binding.pry

# get the number of points scored by this player
                      # String
def num_points_scored(player_name) # player, player_name
  # hash.each do
  # find the right thing
  # once you get the right position, pass in the player_name
  # return the points

  # array method find
  # locate something in an array
  # get that something
  # return the points from it

  # Problem: a bunch of players in a game_hash
  #          I want to find one of them
  #          but how do i do that?
  # Pseudocode:
    # to find_player
      # I have all the players
        # let's get an array of all the players
        # home_players = game_hash[:home][:players]
        # away_players = game_hash[:away][:players]
        # all_players = home_players + away_players
      # how about I search through them for one of the players
        # key, players, name, player_hashes
        # .each, or a for loop
        # all_players.each do |player| # Hash of player stats
        #   # binding.pry
        #   if player_name == player[:player_name]
        #     return player[:points]
        #   end
        # end
        # player, player_stats, player_points, player_info, player_data, complete_player
        # complete_player = all_players.find do |player|
        #   player_name == player[:player_name]
        # end
        # select, find????
        # select => will return an array of matching things
        # find => will return just the one thing matched or nil

        # binding.pry

    # grab points from player
    get_player(player_name)[:points]

end

# short test cycles
def shoe_size(player_name)
  # gettting all plkayers
  # getting the complete player
  # getting the shoe size
  # go through all the players, find one
  # get their shoe size

  get_player(player_name)[:shoe]
end

def all_players
  home_players = game_hash[:home][:players]
  away_players = game_hash[:away][:players]
  home_players + away_players
end

def get_player(player_name)
  all_players.find do |player|
    player_name == player[:player_name]
  end
end

# tomorrows lecture!
def rebounds(player_name)
  get_player(player_name)[:rebounds]
end

# Homework!
# 1. Write a method that will give me all the player names in an array
# => ["Jeff Adrien", "Ben Gordon", etc...]

# 2. Write a method to give me all the players with more than 10 points
# => [ {} , {}, etc...]

# 3. Write those same two, but with an .each
