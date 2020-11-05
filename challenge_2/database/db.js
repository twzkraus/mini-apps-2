const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/bitcoin-tracker', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

const bitcoin = new Schema({
  date: String,
  price: {
    USD: Number,
    GBP: Number,
    EUR: Number,
  }
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
    price: {
      USD: data.bpi['USD'].rate_float,
      GBP: data.bpi['GBP'].rate_float,
      EUR: data.bpi['EUR'].rate_float,
    }
  };
}

module.exports = db;
