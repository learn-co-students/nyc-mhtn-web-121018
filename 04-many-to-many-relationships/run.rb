require 'pry'
require_relative './basketball_player'
require_relative './cat'
require_relative './team'
require_relative './user'
require_relative './tweet'
require_relative './squirrel'
require_relative './tree'
require_relative './nest'

# Problem:
# we can right now ask the team for its players
# we cannot ask a player for its team yet.
# how do we do that?
# can we assign a player to a team?
# => 1. chicken and egg problem
# => 2. what happens if they change teams?  (trading)
  # change the player's team attribute
  # change team's players attribute <== change two of them
  # => where we update just one thing
# Of course, there's a solution already.
# To calculate it.
# Single Source of Truth =>
  # where all the information is kept in one place
  # everything else relying on that information is calculated
  # that way, updating one thing, reflects changes everywhere else

c1 = Cat.new("Bob", true, 10)
c2 = Cat.new("Cinnamon", true, 9)
c3 = Cat.new("Sugar", true, 10)

            # name, colors, players
t1 = Team.new("Brooklyn Nets", ["Black", "White"]) #, BasketballPlayer.all[0..4])
t2 = Team.new("Charlotte Hornets", ["Turquoise", "Purple"]) #, BasketballPlayer.all[5..9])

# Making instances of a Player
p1 = BasketballPlayer.new("Alan Anderson", 0, 16, 22, 12, 12, 3, 1, 1, t1)
p2 = BasketballPlayer.new("Reggie Evans", 30, 14, 12, 12, 12, 12, 12, 7, t1)
p3 = BasketballPlayer.new("Brook Lopez", 11, 17, 17, 19, 10, 3, 1, 15, t1)
p4 = BasketballPlayer.new("Mason Plumlee", 1, 19, 26, 12, 6, 3, 8, 5, t1)
p5 = BasketballPlayer.new("Jason Terry", 31, 15, 19, 2, 2, 4, 11, 1, t1)
p6 = BasketballPlayer.new("Jeff Adrien", 4, 18, 10, 1, 1, 2, 7, 2, t2)
p7 = BasketballPlayer.new("Bismak Biyombo", 0, 16, 12, 4, 7, 7, 15, 10, t2)
p8 = BasketballPlayer.new("DeSagna Diop", 2, 14, 24, 12, 12, 4, 5, 5, t2)
p9 = BasketballPlayer.new("Ben Gordon", 8, 15, 33, 3, 2, 1, 1, 0, t2)
p10 = BasketballPlayer.new("Brendan Haywood", 33, 15, 6, 12, 12, 22, 5, 12, t2)

# Test my code.
u1 = User.new("Mike Cheng")
u2 = User.new("Cinnamon")
u3 = User.new("Mike Cheng")

tw1 = Tweet.new("hey!!", u1)
tw2 = Tweet.new("meow!!", u2)
tw3 = Tweet.new("blah", u1)


# color, size
s1 = Squirrel.new("brown", 2)
s2 = Squirrel.new("grey", 4)
s3 = Squirrel.new("fuschia", 24)

#type, age
tr1 = Tree.new("birch", 2000)
tr2 = Tree.new("maple", 45)
tr3 = Tree.new("Christmas Tree", 9001)

n1 = Nest.new("big", tr3, s1)
n2 = Nest.new("small", tr1, s3)
n3 = Nest.new("medium", tr2, s1)
n4 = Nest.new("giant super sized", tr3, s3)

# reuse the method which makes sense => but it doesnt work
# 1. have to break the loop somehow
# 2. to do it the hacky way and not reuse your methods

binding.pry

puts "bye bye!"
