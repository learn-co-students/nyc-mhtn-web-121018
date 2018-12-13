class Nest
  attr_accessor :size
  attr_reader :tree, :squirrel # Tree instance

  @@all = []

  def initialize(size, tree, squirrel)
    @size = size
    @tree = tree
    @squirrel = squirrel

    @@all << self
  end

  def self.all
    @@all
  end

end # end of Nest class
