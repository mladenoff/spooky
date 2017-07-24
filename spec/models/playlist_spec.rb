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

require 'rails_helper'

RSpec.describe Playlist, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
