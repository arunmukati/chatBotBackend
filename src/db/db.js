const { dbConfig }= require('../../global-variables');
const {mongourl} = require('../../global-variables');
const mongoose = require('mongoose');

// const models = join(__dirname, '../models');
// const connectDB = async () => {
//     try {
//       await mongoose.connect(
//         dbCon,
//         {
//           useNewUrlParser: true
//         }
//       );
  
//       console.log('MongoDB is Connected...');
//     } catch (err) {
//       console.error(err.message);
//       process.exit(1);
//     }
//   };
  
//   module.exports = connectDB;

  
const mongooseDb= async ()=>{
    mongoose.connect(mongourl, {
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
        console.log("we are connected to database")
    });
}

module.exports = mongooseDb;