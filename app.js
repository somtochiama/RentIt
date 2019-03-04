const app = require('./server/server'),
        PORT = process.env.PORT || 3000;

require('./api/api/mailer')

app.listen(PORT, () => {
    console.log(`Magic happens on port ${PORT}`)
});