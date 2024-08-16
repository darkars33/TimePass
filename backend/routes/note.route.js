const express = require('express');
const { createNote, getNotes, editNote } = require('../controllers/note.controller');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.post('/createNote', protectRoute, createNote);
router.get('/getNotes', protectRoute, getNotes);
router.post('/editNote:id', editNote);

module.exports = router;
