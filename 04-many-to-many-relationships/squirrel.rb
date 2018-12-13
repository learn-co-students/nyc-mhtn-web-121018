class Squirrel
  attr_reader :color
  attr_accessor :size

  @@all = []

  def initialize(color, size)
    @color = color
    @size = size

    @@all << self
  end

  def self.all
    @@all
  end

  def nests
    # what should this look very very similar to?
    Nest.all.select do |nest| # Nest instance
      nest.squirrel == self # I am a SqUIRREL!!
    end
  end

  def trees
    self.nests.map do |nest| # Nest instance
      # ask the nest, "what tree were you built in?"
      nest.tree
    end
    # the trees you have a nest in
  end

end # end of Squirrel class
