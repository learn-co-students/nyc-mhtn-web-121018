class Cat < Pet # Pet, Animal, Friend
  extend ModuleName::ClassMethods
  # pulls them in as class methods, automatically adds self.
  include ModuleName::InstanceMethods
  # includes them as instance methods

  # attr_accessor, attr_reader ?
  # Defensive Programming -
  # give it the least amount of permissions/functionality needed

  # hairballs hariball status
  # initialize => this one is last
  # => the last method seen wins, overrides
  def initialize(name, lives)
    # @name = name
    # @mood = "nervous"
    puts "before super"
    # super #(self) # it passes along the arguments from this method
    super(name) # this will call the Parent class's identical method name

    puts "after super"
    @hairball_status = false
    @lives = lives

    # self.class.all << self
  end

  def claw
    puts "claw"
  end

  def scratch
    puts "scratch"
  end

  def meow
    puts "meow"
  end

  def purr
    puts "purr"
  end

end
