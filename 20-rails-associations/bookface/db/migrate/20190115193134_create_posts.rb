class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :content
      t.string :title
      t.string :sponsor
      t.references :user

      t.timestamps
    end
  end
end
