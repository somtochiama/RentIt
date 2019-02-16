const jwt = require('jsonwebtoken'),
    expressjwt = require('express-jwt');
    checkToken = expressjwt({ secret: "secret"})


exports.signToken = (id) => {
    return jwt.sign(
        { _id: id},
        "secret",
        { expiresIn: "168h" }
    )
}


exports.validateToken = (req, res, next) => {
    console.log('checking')
    checkToken(req, res, next);
}
