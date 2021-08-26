const express = require('express');
// const { validationResult } = require('express-validator');
const Admin = require('../models/admin_model');
// const auth = require('../middleware/auth');
const router = express.Router();
// for validation our user data
const { check, validationResult } = require('express-validator');
//for password encryption
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { builtinModules } = require('module');

router.post('/admin/register', [
    check('email', 'Email is required!!!').not().isEmpty(),
    check('password', 'Password is required!!!').not().isEmpty(),
    check('confirmpassword', 'Confirm password is required!').not().isEmpty(),
], function (req, res) {

    const validationError = validationResult(req);
    // res.send(validationError.array());

    if (validationError.isEmpty()) {

        // valid
        // const firstname = req.body.firstname; //fetch data from form
        // const lastname = req.body.lastname; //fetch dat from form 
        const email = req.body.email;
        const password = req.body.password;
        
        bcryptjs.hash(password, 10, function (error, hash_password) {
            const data = new Admin({  email: email, password: hash_password })
            data.save().then(function (result) {
                res.status(201).json({ message: "Registered!!!", success : true })
            })
                .catch(function (err1) {
                    res.status(500).json({ message: err1.message, success : false })
                });
        })
    }
    else {
        //invalid
        // res.send(validationError.array())
        //console.log(validationErr.array())
        res.status(400).json({ "errors": validationError.array(), success : false });
    }
})


module.exports = router;