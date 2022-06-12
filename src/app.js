require('dotenv').config();
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const v1Router = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const validationErrorHandler = require('./middleware/validationErrorHandler');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('', (req, res) => {
  res.sendStatus(200);
});

app.use('/v1', v1Router);

app.use(validationErrorHandler);
app.use(errorHandler);

module.exports = app;
