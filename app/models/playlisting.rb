# == Schema Information
#
# Table name: playlistings
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  track_id    :integer          not null
#  sequence    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlisting < ApplicationRecord
  validates :track, :playlist, presence: :true

  belongs_to :track
  belongs_to :playlist
end
