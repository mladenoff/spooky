class AddImgUrlToAlbum < ActiveRecord::Migration[5.0]
  def change
    add_column :albums, :img_url, :string
  end
end
