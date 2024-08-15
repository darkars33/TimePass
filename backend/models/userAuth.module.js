const mongoose = require('mongoose');

const userAuthSchema = new mongoose.Schema({
          name:{
                    type: String,
                    required: true,
                    trim: true
          },
          email:{
                    type: String,
                    required: true,
                    trim: true,
                    unique: true
          },
          password:{
                    type: String,
                    required: true,
                    trim: true
          }
},
{
          timestamps: true
})

const User = mongoose.model('User', userAuthSchema);

module.exports = User;