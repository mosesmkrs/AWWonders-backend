const express = require('express')
const router = express.Router()

// Import user authentication and authorization functions
const {
    registerUser,
    loginUser,
    protectedRoute
  } = require('../controllers/userController');
  
  // POST user registration
  router.post('/register', registerUser);
  
  // POST user login
  router.post('/login', loginUser);
  
  // Protected route example
  router.get('/protected', protectedRoute);

  module.exports = router
