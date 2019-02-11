class CreateBeverages < ActiveRecord::Migration[5.2]
  def change
    create_table :beverages do |t|
      t.integer :size
      t.boolean :fizzy
      t.boolean :fun
      t.string :name

      t.timestamps
    end
  end
end
