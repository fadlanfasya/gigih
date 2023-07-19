const Playlist = require('../models/Playlist');

const playlist = new Playlist();

function addSong(req, res) {
  const { title, artists, url } = req.body;
  const song = { title, artists, url };
  const songId = playlist.addSong(song);
  res.json({ message: 'Song added to playlist', songId });
}

function playSong(req, res) {
  const songId = req.params.songId;
  const song = playlist.getSong(songId);
  if (song) {
    // Logic to play the song
    res.json({ message: 'Now playing: ' + song.title });
  } else {
    res.status(404).json({ error: 'Song not found' });
  }
}

function getPlaylist(req, res) {
  const songs = playlist.getAllSongs();
  res.json(songs);
}

module.exports = {
  addSong,
  playSong,
  getPlaylist,
};
