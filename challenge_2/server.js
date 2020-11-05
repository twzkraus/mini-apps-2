const express = require('express');
const app = express();
const { fetchCoindesk } = require('./fetchCoindesk.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

