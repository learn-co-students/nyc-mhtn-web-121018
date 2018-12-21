class CreateKidParents < ActiveRecord::Migration[5.2]
  def change
    create_table :kid_parents do |t|
      t.integer :kid_id
      t.integer :parent_id
    end
  end
end
