const express   = require('express'),
        bps     = require('body-parser'),
        morgan  = require('morgan'),
        cors    = require('cors'),
        api     = require('../api/api/api'),
        path    = require('path'),
        app     = express();
        // cron    = require('node-cron');
        
require('../api/api/mailer')

app.use(bps.json());
app.use(bps.urlencoded({ extended: true}));

app.use(morgan('dev'));
app.use(cors());

app.use('/api', api)

app.use((res, req, next) => {
        res.status(404).json({
                message: "Page not found!",
        })
})

app.use((err, req, res, next) => {
        res.status(500).json({err})
})

// Handle Production 

if(process.env.NODE_ENV == 'production') {
        app.use(express.static(path.resolve(__dirname, '../public')))
        
        app.get(/.*/, (req, res) => res.sendFile(path.resolve(__dirname, '../api/public')))
}



module.exports = app;
