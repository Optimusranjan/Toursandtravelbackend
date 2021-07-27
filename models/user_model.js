const mongoose = require('mongoose');
const express = require('express');

const User = mongoose.model('User',{
    firstname: {
        type: String
    },
    lastname: {
        type:String
    },
    email: {
        type:String,
        unique: true
    },
    password: {
        type: String,
     
    },
    confirmpassword: {
        type: String,
       
    }

})


module.exports = User;