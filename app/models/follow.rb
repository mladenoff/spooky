# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  enum :follow_type, playlist: 0, user: 1

  validates :playlist, :follower, presence: true
  validates :playlist, uniqueness: { scope: :follower }

  belongs_to :playlist
  belongs_to :follower, foreign_key: :user_id, class_name: :User
end
