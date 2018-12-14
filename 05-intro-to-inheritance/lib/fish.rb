class Fish < Pet
  # @@all = []

  def initialize(name)
    super
    # @@all << self
  end

  # def self.all
  #   @@all
  # end

  def move
    puts "swimmy swim"
    super # NoMethodError\
    # look up chain
    eat
    # 1. looks for a local variable with that name
    # 2. it looks for a method called self.eat
    # 3. it looks up the chain of Parents => eat
    # 4. go up again
    # 5. if it finds nothing, NameError
  end
end
