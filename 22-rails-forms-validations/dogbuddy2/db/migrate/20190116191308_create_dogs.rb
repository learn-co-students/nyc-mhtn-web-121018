class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.integer :cuteness_level
      t.string :name
      t.string :size
      t.string :breed
      t.boolean :clean

      t.timestamps
    end
  end
end
