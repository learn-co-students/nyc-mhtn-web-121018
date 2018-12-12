require 'pry'
require_relative './basketball_player'
require_relative './cat'

# Making instances of a Player
p1 = BasketballPlayer.new("Alan Anderson", 0, 16, 22, 12, 12, 3, 1, 1)
p2 = BasketballPlayer.new("Reggie Evans", 30, 14, 12, 12, 12, 12, 12, 7)
p3 = BasketballPlayer.new("Brook Lopez", 11, 17, 17, 19, 10, 3, 1, 15)
p4 = BasketballPlayer.new("Mason Plumlee", 1, 19, 26, 12, 6, 3, 8, 5)
p5 = BasketballPlayer.new("Jason Terry", 31, 15, 19, 2, 2, 4, 11, 1)
p6 = BasketballPlayer.new("Jeff Adrien", 4, 18, 10, 1, 1, 2, 7, 2)
p7 = BasketballPlayer.new("Bismak Biyombo", 0, 16, 12, 4, 7, 7, 15, 10)
p8 = BasketballPlayer.new("DeSagna Diop", 2, 14, 24, 12, 12, 4, 5, 5)
p9 = BasketballPlayer.new("Ben Gordon", 8, 15, 33, 3, 2, 1, 1, 0)
p10 = BasketballPlayer.new("Brendan Haywood", 33, 15, 6, 12, 12, 22, 5, 12)

c1 = Cat.new("Bob", true, 10)
c2 = Cat.new("Cinnamon", true, 9)
c3 = Cat.new("Sugar", true, 10)

binding.pry

puts "bye bye!"
