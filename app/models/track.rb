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
#  img_url    :string
#  sequence   :integer
#

class Track < ApplicationRecord
  belongs_to :artist
  belongs_to :album
end
