const pool = require('../db/db').pool

const postListing = async(req, res, next) => {
    try {
        console.log("Helll")
        const {status, location, type, price, desc, address, ownerName, ownerEmail, ownerPhoneNumber} = req.body
        const INSERT_TEXT = "INSERT INTO listing(status, location, address, price, type, description, owner_name, owner_email, owner_phone_number) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)"

        await pool.query(INSERT_TEXT, [status, location, address, price, type, desc, ownerName, ownerEmail, ownerPhoneNumber])

        res.status(201).json({
            message: "Listing Added"
        })
    } catch(err) {
        console.log(err);
        next(err)
    }
}

const getAllListing = async(req, res, next) => {
    try{
        const results = await pool.query('SELECT * FROM listing ORDER BY id ASC');
        
        res.status(200).json({
            data: results.rows
        })
    } catch(err) {
        console.log(err);
        next(err)
    }
}

const deleteListing = async(req, res, next) => {
    try{
        const id = parseInt(req.params.id)
        await pool.query('DELETE FROM listing WHERE id = $1', [id])

        res.status(200).json({
            message: `User deleted with id ${id}`
        })
    } catch(err) {
        next(err)
    }
}

const getOneListing = async(req, res, next) => {
    try{
        const id = parseInt(req.params.id)
        const results = await pool.query('SELECT * FROM listing WHERE id = $1', [id])

        res.status(200).json({
            data: results.rows[0]
        })
    }catch(err) {
        // console.log(err);
        next(err)
    }
}

module.exports = {
    postListing,
    getAllListing,
    getOneListing,
    deleteListing
}