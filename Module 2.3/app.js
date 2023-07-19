const express = require('express');
const playlistController = require('./controllers/playlistController');

const app = express();
app.use(express.json());

// Routes
app.post('/playlist/add', playlistController.addSong);
app.get('/playlist/play/:songId', playlistController.playSong);
app.get('/playlist', playlistController.getPlaylist);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
