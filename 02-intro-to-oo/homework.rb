require 'pry'

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

# Return => Array of player Hashes
def all_players
  home_players = game_hash[:home][:players] # Array of player Hashes
  away_players = game_hash[:away][:players] # Array of player Hashes
  home_players + away_players # Array of player Hashes
end

# Arguments:
#   player_name => String
# Return => a player Hashes
def find_player(player_name)
  # Array of player Hashes
  all_players.find do |player| # player Hash
    # String                # String
    player[:player_name] == player_name # Boolean
  end
end

# Arguments:
#   player_name => String
# Return => Number
def num_points_scored(player_name)
  # Hash       # String     #Symbol
  find_player(player_name)[:points] # Number
end

# Arguments:
#   player_name => String
# Return => Number
def shoe_size(player_name)
  # Hash       # String     #Symbol
  find_player(player_name)[:shoe] # Number
end

# Homework!
# 1. Write a method that will give me all the player names in an array
# => ["Jeff Adrien", "Ben Gordon", etc...]

# it will return an array of the same size
# in each spot in the array,
# it gets whatever you return in your map
player_names = all_players.map do |player| # Hash
  player[:player_name] # String
end
player_names.join

# 2. Write a method to give me all the players with more than 10 points
# => [ {} , {}, etc...]
# from the original array,
# it return a new array with ONLY the values
# where you returned true
x = all_players.select do |player| # Hash
  player[:points] > 10 # true/false
end

# the names of the players with points > 10
# first get the players with points > 10
# then get the names of those players

# 3. Write those same two, but with an .each
names = []
all_players.each do |player| # Hash
  names << player[:player_name]
end

points = []
all_players.each do |player|
  if player[:points] > 10
    points << player
  end
end

binding.pry

puts "bye bye!"
