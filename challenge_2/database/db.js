const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/bitcoin-tracker', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

const bitcoin = new Schema({
  date: String,
  priceUSD: Number,
  priceGBP: Number,
  priceEUR: Number,
  chart: String,
});

const Bitcoin = mongoose.model('Bitcoin', bitcoin);

// monkey patching to access key methods
db.getAll = () => {
  return Bitcoin.find({});
};

db.addOne = (data) => {
  const formattedData = formatRaw(data);
  return Bitcoin.create(formattedData);
};

db.deleteAll = () => {
  return Bitcoin.deleteMany({});
};

const formatRaw = (jsonData) => {
  const data = JSON.parse(jsonData);
  return {
    date: data.time.updated,
    priceUSD: JSON.stringify(data.bpi['USD'].rate_float),
    priceGBP: JSON.stringify(data.bpi['GBP'].rate_float),
    priceEUR: JSON.stringify(data.bpi['EUR'].rate_float),
  };
}

module.exports = db;
