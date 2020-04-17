const validator = require('validator');
const { FibonacciRequestLog } = require('../models');
const { getIPv4 } = require('../services/helper.sevice');

function isValidPage(value) {
  return validator.isInt(value, { min: 1 });
}

exports.getFibonacciLogs = (req, res) => {
  const limit = 5;

  const { page } = req.query;

  let offset = 0;

  if (page && isValidPage(page)) {
    offset = (Number(page) - 1) * limit;
  }

  FibonacciRequestLog.findAndCountAll({
    limit,
    offset,
    where: {
      ip: getIPv4(req),
    },
    order: [
      ['id', 'DESC'],
    ],
  })
    .then(({ count, rows }) => {
      const pages = Math.ceil(count / limit);
      res.status(200).json({ pages, rows });
    })
    .catch(() => {
      res.status(500).json({
        error: 'Internal server error',
      });
    });
};
