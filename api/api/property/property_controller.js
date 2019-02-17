const pool = require('../db/db').pool

const getAllProperty = (req, res) => {
    pool.query('SELECT * FROM property ORDER BY id ASC', (error, results) => {
        if (error) {
          res.status(500).json({ error})
        }
        res.status(200).json(results.rows)
    })
}


const getOwnerByEmail = async (email) => {
    try{
        const owner = await pool.query('SELECT * FROM owner WHERE email = $1', [email])
        if(owner.rows.length > 0) {
            return owner.rows[0].id
        }
        return null
    } catch(err) {
        console.log(err)
    }
}

const insertOwner = async(email, phoneNumber) => {
    try {
        pool.query('INSERT INTO owner (email, phone_number) VALUES ($1, $2)', [email, phoneNumber])
    } catch(err) {
        console.log(err)
    }
}

const postProperty = async (req, res) => {
    try {
        console.log("Hello")
        const {status, location, address, price, type, desc, ownerEmail, ownerPhoneNumber} = req.body;

        let ownerId = await getOwnerByEmail(ownerEmail);

        if(!ownerId) {
            await insertOwner(ownerEmail, ownerPhoneNumber)
            console.log(ownerId)
            ownerId = await getOwnerByEmail(ownerEmail)
            console.log(ownerId)

        } 

        console.log('Heyy', ownerId)

        const insertText = 'INSERT INTO property(status, location, address, price, type, description, owner_id) VALUES($1, $2, $3, $4, $5, $6, $7)'
        await pool.query(insertText, [status, location, address, price, type, desc,ownerId])

        res.status(200).json({
            ownerId,
            "message": "Property added"
        })

    } catch(err) {
        console.log(err)
        throw(err)
    }

    
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

const getProperty = async (req, res, next) => {
    try {
        const id = req.params.id
        let ownerId
        const data = await getProp(id)
        if(data) {
            owner = await getOwnerById(data.owner_id)
        }
        res.status(200).json({
            data,
            owner
        })
    } catch(err) {
        next(err)
    }
  }

const getProp = async(id) => {
    try {
        console.log('here!')
        const prop = await pool.query('SELECT * FROM property WHERE id = $1', [id])
        if(prop) {
            return prop.rows[0]
        }
        return null
            
    } catch(err) {
        console.log(err)
    }
}

const getOwnerById = async (id) => {
    try{
        console.log('there!')

        const owner = await pool.query('SELECT * FROM owner WHERE id = $1', [id])
        if(owner.rows.length > 0) {
            return owner.rows[0]
        }
        return null
    } catch(err) {
        console.log(err)
    }
}

const searchProperty = async (req, res) => {
    let {location, price, type} = req.query;
    console.log(location, price, type);
    try {
        let searchQuery, searchQueryValues
        if(type == 'any'){
            searchQuery = 'SELECT * FROM property WHERE location=$1 AND price <= $2';
            searchQueryValues = [location, price];
        }else{ 
            searchQuery = 'SELECT * FROM property WHERE location=$1 AND price <= $2 AND type = $3';
            searchQueryValues = [location, price, type];
        }
        const queryResult = await pool.query(searchQuery, searchQueryValues);
        return res.status(200).json({
            data: queryResult.rows
        })
    } catch (err) {
        console.log("Something bad happened trying search for an apartment", err);
        return next(err)
    }
}

module.exports = {
    getAllProperty,
    postProperty,
    updateProperty,
    searchProperty,
    deleteProperty,
    getProperty
}
