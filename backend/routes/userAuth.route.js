const express = require('express');
const router = express.Router();
const {signup, login} = require('../controllers/userAuth.controller');

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', (req, res) =>{
          res.send('Logout route');
})

module.exports = router;