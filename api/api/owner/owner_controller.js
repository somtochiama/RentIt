const pool = require('../db/db');


const getAllOwner = (req, res) => {
    pool.query('SELECT * FROM owner ORDER BY id ASC', (error, results) => {
        if (error) {
          res.status(500).json({ error})
        }
        res.status(200).json(results.rows)
    })
}

const postOwner = (req, res) => {
    const {email, phoneNumber} = req.body;
    console.log(email)
    pool.query('SELECT * FROM owner WHERE email = $1', [email], (error, results) => {
        if (error) {
            res.status(500).json({error})
        }
        if(results.rows.length > 0) {
            res.status(500).json({ message: "You are already an owner here"})
        } else {
            pool.query('INSERT INTO owner (email, phone_number) VALUES ($1, $2)', [email, phoneNumber], (error, results) => {
                if (error) {
                    // res.status(500).json({error})
                    // return
                    throw error
                }
                console.log(results)
                res.status(201).json({ message: "You can now post properties on our site"})
            })
        }
    })
  
}



module.exports = {
    getAllOwner,
    postOwner
}