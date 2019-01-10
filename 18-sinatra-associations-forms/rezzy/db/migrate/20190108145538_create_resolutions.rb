class CreateResolutions < ActiveRecord::Migration
  def change
    create_table :resolutions do |t|
      t.string :goal
      t.datetime :deadline
      t.boolean :accomplished
    end
  end
end
