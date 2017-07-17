{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    login: {errors: []},
    createMessage: {errors: ["body can't be blank"]}
  },

  nowPlaying: {
    currentSong: 9, //song_id
    songLength: 356 //length in seconds
    volume: 1 //decimal (if implemented?)
  },

  //current user's sidebar playlists
  playlists {
    songs: [54,3,6,3], //array for correct ordering,
    creatorName: 'String Johnson',
    creatorId: 4
  },

  //albums appear when at artist page or top level album page
  
  records {
    1: {
      id: 1
      name: 'String',
      artist: 'Artist Name',
      songs: [7,5,6,7] //array ensures correct order of tracks,
      imageURL: 'http://hosting.com/your-groovy-album-art.jpg'
    }
  }
}
