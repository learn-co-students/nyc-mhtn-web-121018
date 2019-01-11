class CreateChildren < ActiveRecord::Migration[5.2]
  def change
    create_table :children do |t|
      t.string :name
      t.integer :ssn
      t.datetime :birthday

      t.timestamps #  for both created and updated timestamps. whatup????
    end
  end
end
