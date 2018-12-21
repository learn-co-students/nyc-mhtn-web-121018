class CreateAirlines < ActiveRecord::Migration[5.2]
  def change
    # changes stuff! => changes stuff in the database
    # create table
    create_table :airlines do |t| # table
      # id => don't need to tell them to make this
      # name, headquarters
      t.string :name
      t.string :headquarters
    end
  end
end
