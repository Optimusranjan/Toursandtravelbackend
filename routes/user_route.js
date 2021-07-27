const express = require('express');
// const { validationResult } = require('express-validator');
const User = require('../models/user_model');
const router = express.Router();
// for validation our user data
const { check, validationResult } = require('express-validator');
//for password encryption
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/user/register', [
    check('email', 'Email is required!!!').not().isEmpty(),
    check('password', 'Password is required!!!').not().isEmpty(),
    check('confirmpassword', 'Confirm password is required!').not().isEmpty(),
], function (req, res) {

    const validationError = validationResult(req);
    console.log(req.body);
    // res.send(validationError.array());

    if (validationError.isEmpty()) {

        // valid
        const firstname = req.body.firstname; //fetch data from form
        const lastname = req.body.lastname; //fetch dat from form 
        const email = req.body.email;
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
        
        bcryptjs.hash(password, 10, function (error, hash_password) {
            const data = new User({ firstname: firstname, lastname: lastname, 
            email: email, password: hash_password })

            data.save().then(function (result) {
                res.status(201).json({ message: "You have successfully registered!!!" })
            })
                .catch(function (err) {
                    res.status(500).json({ message: err })
                });
        })
    }
    else {
       
        res.status(400).json({ "errors": validationError.array()});
    }
})

module.exports = router;
