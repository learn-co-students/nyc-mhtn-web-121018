class CreateKids < ActiveRecord::Migration[5.2]
  def change
    create_table :kids do |t|
      t.string :name
      t.boolean :good
      t.integer :santum_id
      # these are your attr_s
    end
  end
end
