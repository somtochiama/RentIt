const bcrypt = require('bcrypt-nodejs')
const pool = require('../db/db').pool
const sendMail = require('../mailer')


const getAllSuscribers = (req, res) => {
    pool.query('SELECT * FROM subscribers ORDER BY id ASC', (error, results) => {
        if (error) {
          res.status(500).json({ error})
        }
        res.status(200).json(results.rows)
    })
}

const postSuscriber = (req, res) => {
    const {email} = req.body;
  console.log(email)
  pool.query('SELECT * FROM subscribers WHERE email = $1', [email], (error, results) => {
      if (error) {
          res.status(500).json({error})
      }
      if(results.rows.length > 0) {
            let MAIL_OPTIONS = {
                from: process.env.GMAIL,
                to: email,
                subject: "Welcome to RentIt",
                text: `Thanks for subscribing to the rent it newsletter, No spam as promised. We will only deliver the latest offers to your inbox. \n\n With love, The RentIt Family`
            }
            sendMail(MAIL_OPTIONS, (err, result) => {
                if(err) {
                    console.log(err)
                    throw (err)
                    return
                }
                console.log("Email Sent successfully")
            })
            res.status(500).json({ message: "You mail is already on our list!"});
            
      } else {
            pool.query('INSERT INTO subscribers (email) VALUES ($1)', [email], (error, results) => {
                if (error) {
                    throw error
                }
                console.log(results)
                
                res.status(201).json({ message: "Your email has been added to our mailing list"})
            })
      }
  })
}

module.exports = {
    getAllSuscribers,
    postSuscriber
}