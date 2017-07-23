class RemoveImgUrlFromTrack < ActiveRecord::Migration[5.0]
  def change
    remove_column :tracks, :img_url, :string
  end
end
