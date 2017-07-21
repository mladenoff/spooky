class AddImgUrlToTrack < ActiveRecord::Migration[5.0]
  def change
    add_column :tracks, :img_url, :string
  end
end
