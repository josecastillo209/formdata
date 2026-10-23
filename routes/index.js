const express = require('express');
const router = express.Router();

// Required to parse incoming form data and JSON payloads
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ReadFormDataSaveMongoDB' });
});

// GET with URI parameter (e.g., /read/Lynne)
router.get('/read/:name', function(req, res, next) {
  const value_name = req.params.name;
  res.send("hello " + value_name);
});

// GET with Query string (e.g., /readNameAndRespond?name=Lynne)
router.get('/readNameAndRespond', function(req, res, next) {
  const value_name = req.query.name;
  res.send("hello " + value_name);
});

// POST to read form data called name
router.post('/readNameAndRespond', function(req, res, next) {
  const value_name = req.body.name;
  res.send("hello now " + value_name);
});

// ==========================================
// Part A - Existing Traditional Application
// ==========================================
router.post('/readCustomerInfoAndRespond', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  res.send("Welcome " + name + "<br>We will contact you at " + email);
});

// ==========================================
// Part B - Modern REST Version
// ==========================================
router.post('/api/customer', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  res.json({
    message: "Welcome " + name,
    email: email
  });
});

module.exports = router;