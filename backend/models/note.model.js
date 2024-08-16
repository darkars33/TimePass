const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
          title: {
                    type: String,
                    required: true,
                    trim: true,
          },
          content:{
                    type: String,
                    required: true,
                    trim: true
          },
          tags:{
                    type: [String],
                    required: true
          },
          userId:{
                    type: mongoose.Schema.Types.ObjectId,
                    red: 'User',
                    required: true
          }
},{
          timestamps: true
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;