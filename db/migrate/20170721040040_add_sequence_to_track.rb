class AddSequenceToTrack < ActiveRecord::Migration[5.0]
  def change
    add_column :tracks, :sequence, :integer
  end
end
