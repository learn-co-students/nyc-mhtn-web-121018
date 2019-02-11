class CreateBurgers < ActiveRecord::Migration[5.2]
  def change
    create_table :burgers do |t|
      t.string :toppings
      t.string :meat
      t.boolean :seed

      t.timestamps
    end
  end
end
