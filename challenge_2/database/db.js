const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bitcoin-tracker', { useNewUrlParser: true });

const db = mongoose.connection;

// monkey patching to access key methods
db.getAll = () => {
  return db.find({});
};

db.addOne = (data) => {
  return db.create(data);
};

export default db;
