class Cat
  attr_accessor :claws, :weight
  attr_reader :name

  @@all = []

                # String # Boolean # Number
  def initialize(name, claws, weight)
    @name = name
    @claws = claws
    @weight = weight

    @@all << self
  end

  def meow
    puts "Meeeeoow! I'm #{self.name}."
  end

  def self.all
    @@all
  end

  # Only cats with claws can fight.
  def self.cat_army
    self.all.select do |cat|
      cat.claws
    end
  end
end # end of Cat class
