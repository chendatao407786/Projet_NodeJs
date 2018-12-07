const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const path = require('path');

router.get('/', (req, res) => {
    User
        .find()
        .then(users => res.json(users));
});
router.get('/:id',(req,res) => {
    User
        .findById(req.params.id)
        .then(user => {
            res.json(user);
        })
})
router.post('/',(req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save().then(user => res.json(user));
});
router
    .delete('/:id', (req, res) => {
        User
            .findById(req.params.id)
            .then(plugin => plugin.remove().then(() => res.json({ success: true })))
            .catch(err => res.status(404).json({ success: false }));
    })
module.exports = router;