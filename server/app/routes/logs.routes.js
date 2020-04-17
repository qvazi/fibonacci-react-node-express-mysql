const express = require('express');
const { getFibonacciLogs } = require('../controllers/logs.controller');

const router = express.Router();

router.get('/fibonacci', getFibonacciLogs);

module.exports = router;
