const validator = require('validator');
const { FibonacciRequestLog } = require('../models');
const calculateFibonacci = require('../services/fibonacciCalculation.service');
const { getIPv4 } = require('../services/helper.sevice');

function isValidNumber(str) {
  return validator.isInt(str, { min: 0, max: 50000 });
}

exports.calculateFibonacci = (req, res) => {
  const { number } = req.params;

  if (number && isValidNumber(number)) {
    const validNumber = Number(number);

    const fibonacciValue = calculateFibonacci(validNumber);

    FibonacciRequestLog.create({
      number: validNumber,
      value: String(fibonacciValue),
      ip: getIPv4(req),
      date: new Date().toISOString(),
    })
      .then((result) => {
        res.status(200).json({
          number: result.number,
          value: result.value,
        });
      })
      .catch(() => {
        res.status(500).json({
          error: 'Internal server error',
        });
      });
  } else {
    res.status(404).json({
      error: 'Invalid number',
    });
  }
};
