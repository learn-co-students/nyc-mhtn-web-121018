class CreateSanta < ActiveRecord::Migration[5.2]
  def change
    create_table :santa do |t|
      t.string :name
    end
  end
end
