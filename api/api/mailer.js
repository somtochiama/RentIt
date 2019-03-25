const mailer = require('nodemailer');
const cron = require('node-cron');
// const sendMail = require('./mailer');
const db = require('./db/db');
require('dotenv').config();

const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
        // type: "login",
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD,
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
        text: 'New apartments have been added on cozycribs.heroku.com, checek one might just be for you!'
    }

    try {
        await sendMail(mailOptions)
        console.log("Mail sent", results)
    } catch (err) {
        console.log("Error happened", err);      
    }
})

const sendMail = (mailOptions) => {
    new Promise(async (resolve, reject) => {
        try {
            const info = await transporter.sendMail(mailOptions);
            resolve(info)
        } catch (err) {
            reject(err)
        }
    })
}
   

module.exports = sendMail;
