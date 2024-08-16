const express = require('express');
const router = express.Router();
const {signup, login, logout, getMe} = require('../controllers/userAuth.controller');
const protectRoute = require('../middleware/protectRoute');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', protectRoute, getMe);

module.exports = router;