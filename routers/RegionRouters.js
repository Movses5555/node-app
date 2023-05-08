const express = require('express');
const router = express.Router();
const { 
  createRegion, 
  getRegions,
  updateRegion,
  deleteRegion,
} = require('../controllers/RegionController');

// Route to get all regions
router.get('/regions', getRegions);
// Route to create a new region
router.post('/regions', createRegion);
// Route to update a region
router.put('/regions/:id', updateRegion);
// Route to delete a region
router.delete('/regions/:id', deleteRegion);

module.exports = router;