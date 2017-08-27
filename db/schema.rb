# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170727010025) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "img_url"
    t.index ["title"], name: "index_albums_on_title", using: :btree
  end

  create_table "artists", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_artists_on_name", unique: true, using: :btree
  end

  create_table "follows", force: :cascade do |t|
    t.integer  "playlist_id", null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id", "playlist_id"], name: "index_follows_on_user_id_and_playlist_id", unique: true, using: :btree
  end

  create_table "playlistings", force: :cascade do |t|
    t.integer  "playlist_id", null: false
    t.integer  "track_id",    null: false
    t.integer  "ord",         null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["playlist_id"], name: "index_playlistings_on_playlist_id", using: :btree
    t.index ["track_id"], name: "index_playlistings_on_track_id", using: :btree
  end

  create_table "playlists", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "title"], name: "index_playlists_on_user_id_and_title", unique: true, using: :btree
  end

  create_table "tracks", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "artist_id",  null: false
    t.string   "url",        null: false
    t.integer  "album_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "sequence"
    t.index ["title"], name: "index_tracks_on_title", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "name"
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
