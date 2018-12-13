class Tree
  attr_reader :type
  attr_accessor :age

  @@all = []

  def initialize(type, age)
    @type = type
    @age = age

    @@all << self
  end

  def self.all
    @@all
  end

  # let's calculate it
  def nests # pluralized
    Nest.all.select do |nest| # Nest instance
      nest.tree == self
    end
  end

  # return => An Array of Squirrel instances
  def squirrels
    # self.nests # what are my nests?
    self.nests.map do |nest| # Nest instance
      nest.squirrel
    end
    # binding.pry
    # [#<Nest>, #<Nest>, #<Nest>]
    # ||
    # \/
    # [#<Squirrel>, #<Squirrel>, #<Squirrel>]
  end
end # end of Tree class
