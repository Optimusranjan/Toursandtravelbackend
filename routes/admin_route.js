const express = require('express');
// const { validationResult } = require('express-validator');
const Admin = require('../models/admin_model');
const auth = require('../middleware/auth');
const router = express.Router();
// for validation our user data
const { check, validationResult } = require('express-validator');
//for password encryption
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { builtinModules } = require('module');

    


module.exports = router;