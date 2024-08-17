const Note = require('../models/note.model');

const createNote = async(req, res) =>{
          try {
                    const {title, content, tags} = req.body;
                    const userId = req.user._id;

                    console.log(userId);

                    if(!title, !content, !tags){
                              return res.status(400).json({
                                        message: "All fields are required",
                                        success: false
                              })
                    }

                    const newNote = new Note({
                              title,
                              content,
                              tags,
                              userId
                    })

                    await newNote.save();

                    return res.status(200).json({
                              message: "Note created successfully",
                              success: true,
                              data: newNote
                    })

          } catch (error) {
                    console.log(error);
                    return res.status(500).json({
                              message: error.message,
                              success: false
                    })
          }
}

const getNotes = async(req, res) =>{
          try {     
                    const userId = req.user._id;
                    const notes = await Note.find({userId});
                    return res.status(200).json({
                              message: "All notes",
                              data: notes,
                              success: true
                    })
          } catch (error) {
                    console.log(error);
                    return res.status(500).json({
                              message: error.message,
                              success: false
                    })
          }
}

const editNote = async(req, res) =>{
          try {
                    const {title, content, tags} = req.body;
                    const noteId = req.params.id;
                    const note = await Note.findById(noteId);
                    if(!note){
                              return res.status(404).json({
                                        message: "Note not found",
                                        success: false
                              })
                    }

                    const userId = req.user._id;

                    if(note.userId.toString() !== userId.toString()){
                              return res.status(401).json({
                                        message: "You are not allowed to edit this note",
                                        success: false
                              })
                    }

                    note.title = title || note.title;
                    note.content = content || note.content;
                    note.tags = tags || note.tags;

                   const updatedNote= await note.save();

                    return  res.status(200).json({
                              message: "Note updated successfully",
                              success: true,
                              data: updatedNote
                    })


          } catch (error) {
                    console.log(error);
                    return res.status(500).json({
                              message: error.message,
                              success: false
                    })
          }
}

const deleteNote = async(req, res) =>{
          try {
                    const noteId = req.params.id;
                    const note = await Note.findById(noteId);
                    
                    const userId = req.user._id;
                    if(note.userId.toString() !== userId.toString()){
                              return res.status(404).json({
                                        message: "You are not allowed to delete this note",
                                        success: false
                              })
                    }

                    await note.deleteOne({_id: noteId});

                    return res.status(200).json({
                              message: "Note deleted successfully",
                              success: true,
                    })
                    

          } catch (error) {
                    console.log(error);
                    return res.status(500).json({
                              message: error.message,
                              success: false
                    })
          }
}

const deleteAllNotes = async (req, res) =>{
          try {
                 const userId = req.user._id;
                 
                 await Note.deleteMany({userId});

                 return res.status(200).json({
                    message: "All Notes deleted successfully",
                    success: true
                 })
                 
          } catch (error) {
                    console.log(error);
                    return res.status(500).json({
                              message: error.message,
                              success: false
                    })
          }
}


module.exports = {
          createNote,
          getNotes,
          editNote,
          deleteNote,
          deleteAllNotes
}