const express = require('express');
const router = express.Router();

// Import specific routes
const randomNumbers = require('./randomNumbers');

// Use specific routes
router.use('/random-numbers', randomNumbers);

module.exports = router;