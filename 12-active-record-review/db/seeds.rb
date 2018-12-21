
puts "destroying everything!"
Passenger.destroy_all # destroys all the rows
Airline.destroy_all
Ticket.destroy_all
puts "all gone"

puts "making passengers"
100.times do
  Passenger.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, age: (0..100).to_a.sample)
end
puts "makde"

puts "creating alines"
20.times do
  Airline.create(name: Faker::Company.name, headquarters: Faker::Address.city)
end
puts "flone"

puts "creating tickets"
50.times do
  Ticket.create(airline_id: Airline.all.sample.id, passenger_id: Passenger.all.sample.id, seat_class: "First")
end
puts "done ticketing"
