class CreatePresents < ActiveRecord::Migration[5.2]
  def change
    create_table :presents do |t|
      t.integer :size
      t.float :price
      t.string :name
      t.integer :santum_id
      t.integer :kid_id
    end
  end
end
