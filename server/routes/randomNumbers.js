const express = require('express');
const router = express.Router();

// Import the controller
const randomNumbersController = require('../controllers/randomNumbersController');

// Define the GET endpoint
router.get('/', randomNumbersController.getRandomNumbers);

module.exports = router;