# Parent class
class Pet
  attr_reader :name
  attr_accessor :mood

  # @@all = []

  def initialize(name) # <= how did this name get here?
    # binding.pry # self
    puts "inside of Pet initialize"
    @name = name
    @mood = "nervous"

    # @@all << self
  end

  # def self.all
  #   @@all
  # end

  def move
    puts "move"
  end
end # end of Pet class
