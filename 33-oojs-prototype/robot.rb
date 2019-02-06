class Robot < Machine
  attr_reader :name, :weight, :specialty

  def initialize(name, weight, specialty)
    @name = name
    @weight = weight
    @specialty = specialty
  end

  def recharge_batteries
    puts "#{self.name} is recharging its batteries"
  end

  def self.class_method

  end

  private

  def priv_method

  end
end

Robot.new("c3po", "100lbs", "being annoying")
