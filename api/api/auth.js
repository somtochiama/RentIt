const jwt = require('jsonwebtoken'),
    expressjwt = require('express-jwt');
    checkToken = expressjwt({ secret: "secret"})


exports.signToken = (id) => {
    return jwt.sign(
        { _id: id},
        "secret",
        { expiresIn: "16800h" }
    )
}


exports.validateToken = (req, res, next) => {
    checkToken(req, res, next);
}
