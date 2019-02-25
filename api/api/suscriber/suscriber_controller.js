const pool = require('../db/db').pool
const sendMail = require('../mailer')


const getAllSuscribers = async (req, res, next) => {
    try {
        const results = await pool.query('SELECT * FROM subscribers ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch(err) {
        return next(err) 
    }
}

const getSuscriberByEmail = async (email) => {
    const suscriber = await pool.query('SELECT * FROM subscribers WHERE email = $1', [email])
    if (suscriber.rows.length > 0) {
        return suscriber.rows[0]
    }
    return null
}

const postSuscriber = async (req, res, next) => {
    try {
        const {email} = req.body;
        console.log(email)
        const subscriber = await getSuscriberByEmail(email)
        if(subscriber) {
            return res.status(500).json({ message: "You mail is already on our list!"});
        }
        await pool.query('INSERT INTO subscribers (email) VALUES ($1)', [email])
        console.log("Here")
        let MAIL_OPTIONS = {
            from: process.env.GMAIL,
            to: email,
            subject: "Welcome to RentIt",
            text: `Thanks for subscribing to the rent it newsletter, No spam as promised. We will only deliver the latest offers to your inbox. \n\n With love, The RentIt Family`
        }
        await sendMail(MAIL_OPTIONS)
        console.log("Email Sent successfully")
        return res.status(201).json({ 
            message: "Your email has been added to our mailing list"
        })
    } catch (err) {
        return next(err)
    }
}

module.exports = {
    getAllSuscribers,
    postSuscriber
}