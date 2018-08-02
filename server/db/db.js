const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(() => console.log('Connected to the  Database.'))
  .catch(e => console.log('Error connecting to the Database', e));

  module.exports = {mongoose};