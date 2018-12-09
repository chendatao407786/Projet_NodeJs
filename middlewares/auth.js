const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');
function verifyToken(req, res, next) {
    const authorizationHeader = req.headers['authorization'];
    let token;
    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }
    if (token) {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                res.status(401).json({ error: 'Failed to authenticate' });
            } else {
                // // User.findById(decoded.id)
                // console.log(decoded);
                // User
                //     .findById(decoded._id)
                //     .then(
                //         user => {
                //                 if (!user) {
                //                     res.status(404).json({ error: 'No such user' });
                //                 } else {
                //                     req.currentUser = user;
                //                     next();
                //                 }
                //             }
                //     )
                next();
                // User.query({
                //     where: { id: decoded.id },
                //     select: ['email', 'id', 'username']
                // }).fetch().then(user => {
                //     if (!user) {
                //         res.status(404).json({ error: 'No such user' });
                //     } else {
                //         req.currentUser = user;
                //         next();
                //     }
                // })
            }
        })
        // res.send("connected");
    } else {
        res.status(403).json({
            error: 'No token provided'
        });
    }
}
module.exports = {
    verifyToken: verifyToken
}