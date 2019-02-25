const pool = require('../db/db').pool

const getAllReviews = async(req, res, next) => {
    try {
        const results = await pool.query('SELECT * FROM reviews ORDER BY id DESC')
        // console.log(results)
        return res.status(200).json({
            data: results.rows
        })
    } catch(err) {
        return next(err)
    }
}

const postReview = async (req, res, next) => {
    try {
        const {rating, review, suggestion} = req.body;        
        await pool.query('INSERT INTO reviews (rating, review, suggestion) VALUES ($1, $2, $3)', [rating, review, suggestion])
        return res.status(201).json({ message: "Your feedback has been recorded and is appreciated"})
       

    } catch (err) {
        return next(err)
    }
}

module.exports = {
    getAllReviews,
    postReview
}