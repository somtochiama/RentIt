const pool = require('../db/db').pool;


const getAllOwner = (req, res) => {
    pool.query('SELECT * FROM owner', (error, results) => {
        if (error) {
          res.status(500).json({ error})
        }
        res.status(200).json(results.rows)
    })
}

const postOwner = (req, res) => {
    const {email, phoneNumber} = req.body;
    let id;
    console.log(email)
    pool.query('SELECT * FROM owner WHERE email = $1', [email], (error, results) => {
        if (error) {
            res.status(500).json({error})
        }
        if(results.rows.length > 0) {

            res.status(500).json({ message: "You are already an owner here", rows: results.rows})
        } else {
            pool.query('INSERT INTO owner (email, phone_number) VALUES ($1, $2)', [email, phoneNumber], (error, results) => {
                if (error) {
                    // res.status(500).json({error})
                    // return
                    throw error
                }
                pool.query('SELECT * FROM owner WHERE email = $1', [email])
                    .then(response => {
                        id = response.rows[0].id;
                        res.status(200).json({message:"Create", id})
                    })
                    .catch(err => console.log(err))
            })
        }
    })
  
}



module.exports = {
    getAllOwner,
    postOwner
}