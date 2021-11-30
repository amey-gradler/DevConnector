const mongoose = require('mongoose');
const config = require('config');
const { get } = require('config');
const db = config.get('mongoURI');
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log('MongoDb Connected...');
  } catch (error) {
    console.error(error.message);
    //EXIT process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
