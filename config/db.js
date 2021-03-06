const mongoose = require('mongoose');

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDb connected ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error ${err.msg}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;