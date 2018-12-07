const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

function validationSignIn(user){
    if(user.length === 0){
        return false;
    }else{
        return true;
    }

}

router.post('/',(req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    User
        .find({
            username: user.username,
            password: user.password
        })
        .then((user) => {
            if(validationSignIn(user)){
                const token = jwt.sign({
                    id: user._id,
                    username: user.username
                  }, "sadfdsfdsf");
                  res.json({ token });
            }else{
                res.status(401).json({ errors: { form: "Invalid Credentials" } })
            }
        })
    
    
});
module.exports = router;