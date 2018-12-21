class Passenger < ActiveRecord::Base
  has_many :tickets
  has_many(:airlines, through: :tickets)
end
