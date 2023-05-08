const express = require('express');
const router = express.Router();
const { 
  createCountry, 
  getCountries, 
  updateCountry, 
  deleteCountry
} = require('../controllers/CountryController.js');

// Route to get all countries
router.get('/countries', getCountries);
// Route to create a new country
router.post('/countries', createCountry);
// Route to update a country
router.put('/countries/:id', updateCountry);
// Route to delete a country
router.delete('/countries/:id', deleteCountry);

module.exports = router;