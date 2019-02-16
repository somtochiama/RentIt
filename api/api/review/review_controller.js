const pool = require('../db/db').pool

const getAllReviews = (req, res) => {
    pool.query('SELECT * FROM reviews ORDER BY id ASC', (error, results) => {
        if (error) {
          res.status(500).json({ error})
        }
        res.status(200).json(results.rows)
    })
}

const postReview = (req, res) => {
    const {rating, review, suggestion} = req.body;
    // console.log(email)
    
    pool.query('INSERT INTO reviews (rating, review, suggestion) VALUES ($1, $2, $3)', [rating, review, suggestion], (error, results) => {
        if (error) {
            throw error;
            /* res.status(500).json({error})
            return; */
        }
        console.log(results)
        res.status(201).json({ message: "Your feedback has been recorded and is appreciated"})
    })
}

module.exports = {
    getAllReviews,
    postReview
}