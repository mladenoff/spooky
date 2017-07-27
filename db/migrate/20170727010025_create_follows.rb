class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :playlist_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :follows, [:user_id, :playlist_id], unique: true
  end
end
