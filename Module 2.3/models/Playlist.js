class Playlist {
    constructor() {
      this.playlist = {};
      this.nextSongId = 1;
    }
  
    addSong(song) {
      const songId = this.nextSongId++;
      this.playlist[songId] = song;
      return songId;
    }
  
    getSong(songId) {
      return this.playlist[songId];
    }
  
    getAllSongs() {
      return Object.values(this.playlist);
    }
  }
  
  module.exports = Playlist;
  