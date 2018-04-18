class AddFollowTypeToFollows < ActiveRecord::Migration[5.0]
  def change
    add_column :follows, :follow_type, :integer, null: false, default: 0
  end
end
