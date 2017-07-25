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

require 'rails_helper'

RSpec.describe Playlisting, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
