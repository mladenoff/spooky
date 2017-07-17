# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## artists

column name | data type | details
------------|-----------|------------
id          | integer   | not null, primary key
name        | string    | not null

## tracks
column name | data type | details
------------|-----------|------------
id          | integer   | not null, primary key
name        | string    | not null
artist_id   | integer   | not null, foreign key (references artists), indexed
record_id   | integer   | not null, foreign key (references records), indexed

## records
column name | data type | details
------------|-----------|-------
id          | integer   | not null, primary key
name        |string     | not null

## playlists
column name | data type | details
------------|-----------|-------
id          | integer   | not null, primary key
name        |string     | not null
user_id     | integer   | not null, foreign key (references users), indexed

## playlistings

Join table

column name | data type | details
------------|-----------|-------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references tracks), indexed

## follows

column name   | data type | details
--------------|-----------|---------------
id            | integer   | not null, primary key
follower_id   | integer   | not null, foreign key (references users), indexed
followee_id   | integer   | not null, foreign key (references users), indexed
followee_type | string    | not null //marks followee as either playlists 
