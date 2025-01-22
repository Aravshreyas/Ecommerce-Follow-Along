const express = require('express');
const upload = require('../middleware/multer.js');
const {
  // CreateUSer,
  verifyUserController,
  signup,
  login,
} = require('../controllers/userController.js');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/create-user', upload.single('profilePicture'), signup);
router.get('/activation/:token', verifyUserController);

// router.post('/signup', signup);
router.post('/login', login);

module.exports = router;