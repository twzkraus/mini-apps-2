const express = require('express');
const path = require('path');
const { fetchCoindesk } = require('./fetchCoindesk.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/price', (req, res) => {
  fetchCoindesk()
    .then(result => {
      res.send(result.body.readableBuffer.head.data.toString());
    })
    .catch((err) => res.send(400));
});

app.listen(PORT, () => {
  console.log('Express server is running on port', PORT);
});

