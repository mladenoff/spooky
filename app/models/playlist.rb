# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id}

  belongs_to :user
  has_many :playlistings
  has_many :tracks, through: :playlistings

  def tracks_in_order
    self.tracks
  end
end
