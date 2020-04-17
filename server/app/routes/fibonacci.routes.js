const express = require('express');
const { calculateFibonacci } = require('../controllers/fibonacci.controller');

const router = express.Router();

router.get('/:number', calculateFibonacci);

module.exports = router;
