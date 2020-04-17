const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/models');
const fibonacciRoutes = require('./app/routes/fibonacci.routes');
const logsRoutes = require('./app/routes/logs.routes');

const PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 8080;

const { log } = console;


async function main() {
  try {
    const app = express();

    await db.sequelize.sync();

    const corsOptions = {
      origin: '*',
    };

    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api/fibonacci', fibonacciRoutes);
    app.use('/api/logs', logsRoutes);

    if (PRODUCTION) {
      log('PRODUCTION');
      app.use(express.static(path.join(__dirname, '../client/build')));

      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
      });
    }

    app.use((req, res, next) => {
      const error = new Error('Not Found');
      error.status = 404;
      next(error);
    });

    app.use((error, req, res, next) => {
      res.status(error.status || 500);
      res.json({
        error: PRODUCTION ? 'Internal server error' : error.message,
      });
    });

    app.listen(PORT, () => log('Server up:', PORT));
  } catch (error) {
    log(error);
  }
}

main();
