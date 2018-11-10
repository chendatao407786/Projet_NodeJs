const express = require('express');
const router = express.Router();
const Plugin = require('../../models/Plugin');

router.get('/',(req,res) => {
    Plugin
        .find()
        .then(plugins => res.json(plugins));
});

router.post('/',(req,res) => {
    console.log("post method called");
    const newPlugin = new Plugin({
        seller : {
            name : req.body.seller.name,
            siteSellerUrl : req.body.seller.siteSellerUrl
        },
        creator : req.body.creator,
        imageUrl : req.body.imageUrl,
        description : req.body.description,
        tag : req.body.tag,
        parametres : req.body.parametres
    });
    newPlugin.save().then(plugin => res.json(plugin));
    
});

router
    .delete('/:id',(req,res) => {
        Plugin
            .findById(req.params.id)
            .then(plugin => plugin.remove().then(() => res.json({success : true})))
            .catch(err => res.status(404).json({success : false}));
    })
    



module.exports = router;