var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

router.get('/contacts', function(req, res, next) {
    Contact.find()
           .exec(function(err, contacts) {
               if(err) {
                   return res.status(500).json({
                       title: 'An error occured',
                       error: err
                   });
               }

               res.status(200).json({
                   message: 'Success',
                   obj: contacts
               });
           });
});

router.post('/contacts', function(req, res, next) {
    var contact = new Contact({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address,
        twitter: req.body.twitter
    });

    console.log(req.body.firstname);

    contact.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occoured',
                error: err
            });
        }

        res.status(201).json({
            message: 'Contact Saved',
            obj: result
        });
    });
});

module.exports = router;