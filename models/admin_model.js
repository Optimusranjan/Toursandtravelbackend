const mongoose = require('mongoose');
const express = require('express');

const Admin = mongoose.model('Admin',{
    email: {
        type:String,
        // required: true,
        unique: true
    },
    password: {
        type:String
        // require: true
    },
    confirmpassword: {
        type:String
        // require:true
    }
})

module.exports = Admin;
