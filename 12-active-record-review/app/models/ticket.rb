class Ticket < ActiveRecord::Base
  # instead of attr_reader :airline, :passenger
  belongs_to :airline
  belongs_to :passenger # MACROS, attr_

  # baren wasteland!!!

  # def airline
  #   Airline.find(self.airline_id)
  # end

  # def passenger
  #   Passenger.find(self.passenger_id)
  # end
end
