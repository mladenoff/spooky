class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :follows, :playlist_id, :followee_id
  end
end
