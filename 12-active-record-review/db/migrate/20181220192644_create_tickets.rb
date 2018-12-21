class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.integer :airline_id # foreign key to airline because we belong to an airline
      t.integer :passenger_id # foreign key to passenger because we belong to a passenger
      t.string :seat_class
    end
  end
end
