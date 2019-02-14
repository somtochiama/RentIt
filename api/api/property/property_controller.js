const pool = require('../db/db')

const getAllProperty = (req, res) => {
    pool.query('SELECT * FROM property ORDER BY id ASC', (error, results) => {
        if (error) {
          res.status(500).json({ error})
        }
        res.status(200).json(results.rows)
    })
}

const postProperty = (req, res) => {
    const {status, location, address, price, type, ownerId, desc} = req.body;
    // console.log(email)
    
    pool.query('INSERT INTO property (status, location, address, price, type, owner_id, description) VALUES ($1, $2, $3, $4, $5, $6, $7)', [status, location, address, price, type, ownerId, desc], (error, results) => {
        if (error) {
            throw error;
            /* res.status(500).json({error})
            return; */
        }
        console.log(results)
        res.status(201).json({ message: "Your feedback has been recorded and is appreciated"})
    })
}

const deleteProperty = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM property WHERE id = $1', [id], (error, results) => {
        if (error) {
            // throw error
            res.status(500).json({ error})
        }
        console.log(results)
        res.status(200).send(`User deleted with ID: ${id}`)
    })
}

const updateProperty = (req, res) => {
    const id = parseInt(req.params.id)
    const {status, location, address, price, type, ownerId, desc} = req.body

    pool.query(
        'UPDATE property SET status = $1, location = $2, address = $3, price = $4, type = $5, owner_id = $6, description = $7 WHERE id = $8',
        [status, location, address, price, type, ownerId, desc, id],
        (error, results) => {
        if (error) {
            throw error
        }
        console.log(results)
        res.status(200).send(`User modified with ID: ${id}`)
        }
        
    )
}

const getProperty = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query('SELECT * FROM property WHERE id = $1', [id], (error, results) => {
      if (error) {
        res.status(200).json({error})
      }
      res.status(200).json(results.rows[0])
    })
  }

module.exports = {
    getAllProperty,
    postProperty,
    updateProperty,
    deleteProperty,
    getProperty
}
