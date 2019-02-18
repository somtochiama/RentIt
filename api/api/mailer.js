const mailer = require('nodemailer');
const cron = require('node-cron');
// const sendMail = require('./mailer');
const db = require('./db/db');
require('dotenv').config();

const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
        // type: "login",
        user: "somtochionyekwere@gmail.com",
        pass: "Pyramid1",
    }
});

cron.schedule('* * 20 * *', async () => {
    console.log('Running newsletter task ')
    const queryResult = await db.query('SELECT * FROM subscribers');
    let emails = queryResult.rows.map((subscription) => subscription.email);
    let emailString = emails.join(',');
    const mailOptions = {
        to: emailString,
        subject: 'New apartments from Move in!',
        text: 'New apartments have been added on rentit.com, checek one might just be for you!'
    }

    sendMail(mailOptions, (err, results) => {
        if(err) {
            console.log("Error happened");
            return
        }
        console.log("Mail sent", results)
    });
    
})

const sendMail = (mailOptions, cb) => {
    console.log(process.env.GMAIL, "Heyy")
    transporter.sendMail(mailOptions, cb);
}
   

module.exports = sendMail;
