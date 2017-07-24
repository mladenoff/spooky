class CreatePlaylistings < ActiveRecord::Migration[5.0]
  def change
    create_table :playlistings do |t|
      t.integer :playlist_id, null: false
      t.integer :track_id, null: false
      t.integer :sequence, null: false

      t.timestamps
    end
    add_index :playlistings, :playlist_id
    add_index :playlistings, :track_id
  end
end
