const express = require('express');
const { createNote, getNotes, editNote, deleteNote, deleteAllNotes } = require('../controllers/note.controller');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.post('/createNote', protectRoute, createNote);
router.get('/getNotes', protectRoute, getNotes);
router.post('/editNote/:id',protectRoute, editNote);
router.delete('/deleteNote/:id', protectRoute, deleteNote);
router .delete('/deleteAll', protectRoute, deleteAllNotes);

module.exports = router;
