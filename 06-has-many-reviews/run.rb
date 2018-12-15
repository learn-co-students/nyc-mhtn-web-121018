require 'pry'

# each
  # generic all purpose loop, depends on programmer creativity
  # is to do things
# map / collect <== literally runs the same exact code
  # use map because every other language calls it map
  # changes the values in the array
# select
  # will pick out those values in the array
  # it's going to whittle down the array
# find / detect <== literally runs the same exact code
  # use find because the ActiveRecord library calls it find
  # because you just want one thing; don't want an array

random_array = [
  { name: "Mike", beer: "none", cats: true, age: 33 },
  { name: "Matt", beer: "Lager", cats: false, age: 28 },
  { name: "Brooke", beer: "IPA", cats: true, age: 26 },
  { name: "Sebastian", beer: "Bud/Coors", cats: false, age: 27 },
  { name: "Mike", beer: "IPA", cats: true, age: 33 }
]

# Arrays => they're the generic data structure for holding lists of things
  # if you need a very specific array, you extend this
  # class SpecialArray < Array

# Hash => this is for a generic collection of attributes
  # make a new class

# String, Fixnum, TrueClass, FalseClass, Float

# 1. return an array of everyone who likes cats
# a) each b) map c) select d) find
# => let's try both and see the difference

a = random_array.map do |hash|
  hash[:cats] == true # this is what map changes those values to
end

b = random_array.select do |hash|
  hash[:cats] == true
end

random_array.map do |hash|
  if hash[:cats] == true
    hash[:name]
  end
end.compact

result = random_array.select do |hash|
  hash[:cats] == true
end

result.map do |hash|
  hash[:name]
end

# 2. how do I get the person who likes IPA beer?
# a) each b) map c) select d) find
random_array.find do |hash|
  hash[:beer] == "IPA"
end

# 3. print out all the name
random_array.each do |hash|
  puts hash[:name]
end


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

game_hash.map do |key, value|
  value[:players].each do |hash|
    puts hash[:player_name]
  end
end


b1 = { name: "Lager", price: 100 }
b2 = { name: "IPA", price: 200 }
b3 = { name: "Coors", price: 300 }
b4 = { name: "Sam Adams", price: 10 }
b5 = { name: "Guinness", price: 1 }

def price_in_kronos(beer)
  beer[:price] * 2
end

i1 = { name: "Mike", beer: "none", cats: true, age: 33, price: 10 }

def call_name(instructor)
  puts "Hey! #{instructor[:name]}"
end

class Beer
  attr_reader :name, :fridge
  attr_accessor :price

  @@all = []

  def self.all
    @@all
  end

  def self.names
    # ["Lager", "IPA", yada yada]
    # Array of Beer instances
    @@all.map do |beer| # Beer instance
      beer.name
    end
    # returns an Array of Strings
  end

  def initialize(name, price, fridge)
    @name = name
    @price = price
    @fridge = fridge

    @@all << self
  end

  def price_in_kronos #(beer)
    # beer[:price] * 2
    self.price * 2
  end

  # What fridge are you in?
  # def fridge
  #   @fridge
  # end
end

class Fridge
  attr_reader :size

  @@all = []

  def self.all
    @@all
  end

  def initialize(size)
    @size = size

    @@all << self
  end

  # What beers are in you?
  def beers
    # calculate our answer
    # ask the Beer class a question
      # What fridge are you in? Is it me?
    Beer.all.select do |beer|
      beer.fridge == self # are you in me?
    end
  end
end

f1 = Fridge.new(100)
f2 = Fridge.new(50)

b1 = Beer.new("Lager", 100, f1)
b2 = Beer.new("IPA", 200, f2)
b3 = Beer.new("Coors", 300, f1)
b4 = Beer.new("Sam Adams", 10, f2)
b5 = Beer.new("Guinness", 1, f1)

# one to many
# Fridge --< Beer
  # the location of the beers
# Fridge has_many Beers
# Beer belongs_to a Fridge
  # The one who belongs_to holds the instance of the other.
  # That instance is just a reference.

# User, Photo, Comment

# User --< Photo
  # users owning photos

 # my comments    # the comments on this photo
# User --< Comment >-- Photo
#  \/                   \/
#   --------------------
#   the user's comments on photos

class User
  attr_reader :name

  @@all = []

  def self.all
    @@all
  end

  def initialize(name)
    @name = name

    @@all << self
  end

  # tell me about the photos you own
  def my_photos
    Photo.all.select do |photo|
      photo.user == self
    end
  end

  # which photos have i commented on
  def commented_photos
    self.comments.map do |comment|
      comment.photo
    end
  end

  def comments # which comments I made
    Comment.all.select do |comment|
      comment.user == self
    end
  end
end

class Photo
  attr_reader :size, :user # establishes the belongs_to side

  @@all = []

  def self.all
    @@all
  end

  def initialize(size, user)
    @size = size
    @user = user

    @@all << self
  end

  # tell me about who owns you
  # def user
  #
  # end

  def commenters # the user who commented on you
    self.comments.map do |comment|
      comment.user
    end
  end

  def comments # my comments
    Comment.all.select do |comment|
      comment.photo == self
    end
  end
end

class Comment
  attr_reader :message, :user, :photo

  @@all = []

  def self.all
    @@all
  end

  def initialize(message, user, photo)
    @message = message
    @user = user
    @photo = photo

    @@all << self
  end
end

u1 = User.new("u1")
u2 = User.new("u2")
u3 = User.new("u3")

p1 = Photo.new(1, u1)
p2 = Photo.new(2, u2)
p3 = Photo.new(3, u1)

c1 = Comment.new("asdfsadf", u1, p1)
c2 = Comment.new("asdfsadf", u1, p2)
c3 = Comment.new("asdfsadf", u2, p1)
c4 = Comment.new("asdfsadf", u3, p1)
c5 = Comment.new("asdfsadf", u3, p3)












class Instructor
  attr_reader :name

  def initialize(name)
    @name = name
  end
end
# [b1, b2, b3, b4, b5]

binding.pry

puts "goodbye!"
