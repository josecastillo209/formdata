const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // Returning JSON makes this easier to consume with fetch() on the frontend
  res.json({ message: 'respond with a resource' });
});

module.exports = router;