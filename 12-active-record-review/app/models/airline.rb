class Airline < ActiveRecord::Base
  # there's nothing here!!!
  has_many :tickets
  has_many :passengers, through: :tickets

  # def tickets
  #   Ticket.all.select do |ticket| # Ticket instance
  #     # ticket.airline_id == self.id
  #     ticket.airline == self
  #   end
  # end

  # def passengers
  #   self.tickets.map do |ticket|
  #     # Passenger.find(ticket.passenger_id)
  #     ticket.passenger
  #   end
  # end


end # end of Airline class
