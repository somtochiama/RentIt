const bcrypt = require('bcrypt-nodejs')
const pool = require('../db/db');
const auth = require("../auth")
  


const createAdmin = (req, res) => {
  const {email, password} = req.body;
  console.log(email)
  pool.query('SELECT * FROM admins WHERE email = $1', [email], (error, results) => {
      if (error) {
          res.status(500).json({ error })
      }
      if(results.rows.length > 0) {
          res.status(500).json({ message: "Your account already exists"})
      } else {
        bcrypt.genSalt(10, function(err, result) {
            bcrypt.hash(password, result, null, function(err, hash) {
                if(err) {
                    res.status(500).json({ error: err})
                } else {
                    pool.query('INSERT INTO admins (password, email, salt) VALUES ($1, $2, $3)', [hash, email, result], (error, results) => {
                        if (error) {
                          throw error
                        }
                        console.log(results)
                        res.status(201).json({ message: "User Created"})
                      })
                }          
            });
        })
      }
  })
}

const loginUser = (req, res, next) => {
  const {email, password} = req.body;
  console.log(email)
  pool.query('SELECT * FROM admins WHERE email = $1', [email], (error, results) => {
      if (error) {
        res.status(500).json({ error })          
      }
      if(results.rows.length === 0) {
          res.status(500).json({ message: "You don't have an account yet!"})
      } else {
        bcrypt.compare(password, results.rows[0].password, function(err, result) {
          if(err) {
              console.log("error")
              res.status(500).json(err)
          } else if(result){
              req.user = results.rows[0];
              next()
            //   res.status(200).json(results.rows[0])
          } else {
              console.log("password problem")
              res.status(404).json({error: "Invalid Credentials"})
          }
      })
      }
  })
}

authAdmin = (req, res, next) => {
    var token = auth.signToken(req.user.id);

    res.status(200).json({
        '_token': token,
        'data': req.user
    })
}

module.exports = {
  createAdmin,
  loginUser,
  authAdmin,
  pool
}