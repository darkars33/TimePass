const mongoose = require('mongoose');

const connectToDB = async () =>{
          try {
                    const connect = await mongoose.connect(process.env.MONGO_URL);
                    if(connect){
                              console.log(`MongoDB connected: ${connect.connection.host}`);
                    }else{
                              console.log('Failed to connect to MongoDB');
                    }
          } catch (error) {
                    console.log(error);
          }
}

module.exports = connectToDB;