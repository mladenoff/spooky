# Spooky

[Spooky][live-link] is a streaming music app inspired by [Spotify][spotify]. It is a single-page full-stack web application built on React/Redux, Ruby on Rails, and a ProgresSQL database.

## Features

* User accounts, with secure authentication both on the back- and frontends.

* Users can create playlists and add songs to them.

* Playlists are followable by users

* Live asynchronous search

## Project Design

Spooky was designed over a two week period in Summer 2017. The includes MVP features, an implementation timeline and more extensive documentation.

## Technologies

Spooky is built on a Ruby on Rails (Rails 5) backend. It uses a RESTful API and a PostgresSQL database. All backend data is served as JSON, and rendering of HTML is taken care of exclusively by React.js.

On the frontend, AJAX requests are made through jQuery. The returned JSON objects are parsed and handled by React following the Redux implementation of the Flux methodology. The state is unidirectional and modular with separate slices and reducers for session/user, playlists, tracks, and playback status. The state is semi-normalized although the small scale of the app allows some more duplication of information.

Audio playback is through [howler.js][howler] an open source library from GoldFire Studios. Howler objects are controlled through a scratch-built UI which interfaces with a react-howler wrapper for some functions, and directly manipulates the Howl object with vanilla JS for others.

## Changes since initial build

I have deliberately kept the design and functionality of the app true to how it looked after two weeks work. That said, I have made numerous changes, mostly 'under the hood,' since it was originally built.

### Fall 2017

* Style fixes
  * I did an awful lot of refactoring. _Spooky_, in its original form, was very much a product of a React newbie and was very much built in two week.
  * I spent a great deal of time refining primarily my React, Redux, and other JavaScript code. That said, I did make some changes to my Ruby.

### Winter 2017-2018

* Busted (nearly?) every N+1 query
  * I refined my JBuilder views to eliminate almost every N+1 query from the original app

### Spring 2018

* Migrated to Webpack 4

* Migrated to React 16

## Future direction

### Frontend

#### UI

* The UI needs further refinement.

#### More hubs

* The existing routes on both the front and back end could support a wider variety of 'hub' pages allowing for User, Album, Arist or Playlist browse views.

### Backend

#### Two mode index methods

* If passed an id, fetch user items, if no id, fetch all items.

#### Following users and playlists

* Make use of a Followable polymorphic association.

#### Stat keeping

* Current the app does not keep track of things like playcount.

[live-link]: https://www.spooky.live
[spotify]: https://spotify.com
[howler]: https://howlerjs.com
