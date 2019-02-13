const express   = require('express'),
        bps     = require('body-parser'),
        morgan  = require('morgan'),
        cors    = require('cors'),
        api     = require('../api/api'),
        app     = express();

app.use(bps.json());
app.use(bps.urlencoded({ extended: true}));

app.use(morgan('dev'));
app.use(cors());

app.use('/api', api)

module.exports = app;
