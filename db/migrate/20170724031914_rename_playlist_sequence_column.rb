class RenamePlaylistSequenceColumn < ActiveRecord::Migration[5.0]
  def change
    change_table :playlistings do |t|
      t.rename :sequence, :ord
    end
  end
end
