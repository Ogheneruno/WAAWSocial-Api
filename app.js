const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routers = require('./routes/index');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

routers(app);

app.use(helmet());

app.use(logger('dev'));

module.exports = app;