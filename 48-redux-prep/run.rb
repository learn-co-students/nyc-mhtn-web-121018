require 'pry'

class Cat
  attr_accessor :name, :age, :clawed

  def initialize(name, age, clawed)
    @name = name
    @age = age
    @clawed = clawed
  end

end

binding.pry
