# a module is code that you pull into any class
# that shouldn't be shared in a parent class

# Oh man....
# organizing code
# ModuleName::Cat.new
module ModuleName # Namespace => ModuleName => folder
  class Cat

  end
  # this module is for my instance method stuff
  module InstanceMethods
    def walk
      puts "walks"
    end
  end

  # this module is for my class method stuff
  module ClassMethods
    @@all = []

    def all
      @@all
    end
  end
end # end of module Module
