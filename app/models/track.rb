# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  url        :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  artist_id  :integer
#  sequence   :integer
#

class Track < ApplicationRecord
  validates :title, :url, :artist, :album, presence: true

  belongs_to :artist
  belongs_to :album
  has_many :playlistings
  has_many :playlists, through: :playlistings

  def self.search(term)
    self.joins(:artist, :album).where("tracks.title ILIKE ? OR artists.name ILIKE ? OR albums.title ILIKE ?", "%#{term}%", "%#{term}%", "%#{term}%")
  end
end
