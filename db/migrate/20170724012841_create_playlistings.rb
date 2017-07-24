class CreatePlaylistings < ActiveRecord::Migration[5.0]
  def change
    create_table :playlistings do |t|
      t.integer :playlist_id
      t.integer :track_id
      t.integer :sequence

      t.timestamps
    end
    add_index :playlistings, :playlist_id
    add_index :playlistings, :track_id
  end
end
