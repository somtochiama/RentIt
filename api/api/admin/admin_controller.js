const bcrypt = require('bcrypt-nodejs')
const pool = require('../db/db');
const auth = require("../auth")


const generateSalt = (ROUNDS) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(ROUNDS,(err, salt) => {
      if(err) {
        reject(err)
      }
      resolve(salt)
    })
  })
}
  
const hashPassword = (password, salt) => {
  return new Promise ((resolve, reject) => {
    bcrypt.hash(password, salt, null, (err, hash) => {
      if(err) {
        reject(err)
      }
      resolve(hash)
    })
  })
}

const checkPassword = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, isMatch) => {
            if(err){
                reject(err);
            }
            resolve(isMatch)
        })
    })
}

/* const comparePassword = (password, hash) => {
  return new Promise((reject, resolve) => {
    bcrypt.compare(password, hash, (err, isMatch) => {
      if(err) {
        reject(err);
      }
      resolve(isMatch);
    })
  })
} */

const checkAdminExist = async (email) => {
  const admin = await pool.query('SELECT * FROM admins WHERE email = $1', [email])
  if(admin.rows.length > 0) {
    return admin.rows[0]
  }
  return null
}


const createAdmin = async (req, res, next) => {
  try{
      const {email, password} = req.body;
      const present = await checkAdminExist(email);
      if(present) {
        return res.status(400).json(
          { message: "Your account already exists"}
        )}
        
        const salt = await generateSalt(10);
        const hashedPassword = await(hashPassword(password, salt));
        const insertQuery = 'INSERT INTO admins (password, email, salt) VALUES ($1, $2, $3)';
        const newAdmin = await pool.query(insertQuery, [hashedPassword, email, salt])

        return res.status(201).json({
          message: "Your account has been created!"
        })
  } catch(err) {
    console.log(err);
    return next(err)
  }

}
const authAdmin = (req, res, next) => {
    var token = auth.signToken(req.user.id);

    res.status(200).json({
        '_token': token,
        'data': req.user
    })
}

const loginUser = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    console.log(email)
    const admin = await checkAdminExist(email);
    if(!admin) {
      return res.status(403).json({
        message: "You don't have an account"
      })
    }
    console.log(admin)
    let isMatch = await checkPassword(password, admin.password)
        if(!isMatch){
          return res.status(400).json({
            message: "Invalid Credentials"
          })         
        }
    /* const isMatch = await comparePassword(password, admin.password);
    console.log(isMatch)
    if(isMatch) {
      return res.status(200).json({message: "Logged In"})
    } */
    req.user = admin;
    next() 
  } catch(err) {
    console.log(err);
    // return res.status(500).json("Error!")
    return next(err)
  }
}


module.exports = {
  createAdmin,
  loginUser,
  authAdmin,
  pool
}