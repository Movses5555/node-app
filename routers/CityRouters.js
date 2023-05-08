const express = require('express');
const router = express.Router();
const { 
  createCity, 
  getCities,
  updateCity,
  deleteCity,
} = require('../controllers/CityController');

// Route to get all cities
router.get('/cities', getCities);
// Route to create a new city
router.post('/cities', createCity);
// Route to update a city
router.put('/cities/:id', updateCity);
// Route to delete a city
router.delete('/cities/:id', deleteCity);

module.exports = router;