# == Schema Information
#
# Table name: playlistings
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  track_id    :integer          not null
#  ord         :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlisting < ApplicationRecord
  validates :track_id, :playlist_id, presence: :true
  validates :track, uniqueness: { scope: :playlist }

  belongs_to :track
  belongs_to :playlist
end
