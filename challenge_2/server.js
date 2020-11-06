const express = require('express');
const path = require('path');
const { fetchCurrent, fetchHistorical } = require('./axiosCoindesk.js');
const db = require('./database/db.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/price', (req, res) => {
  if (JSON.stringify(req.query) !== '{}') {
    respondWithHistorical(req, res);
  } else {
    fetchCurrent()
    .then(data => db.addOne(JSON.stringify(data)))
    .then(() => res.redirect('/price_history'))
    .catch(err => res.sendStatus(400));
  }
});

app.get('/price_history', (req, res) => {
  db.getAll()
    .then(data => res.json(data))
    .catch(err => res.sendStatus(400));
});

const respondWithHistorical = (req, res) => {
  fetchHistorical(req.query.start, req.query.end)
    .then(data => res.json(data))
    .catch(err => res.sendStatus(400));
};

app.listen(PORT, () => {
  console.log('Express server is running on port', PORT);
});

