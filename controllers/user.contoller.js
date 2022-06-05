const models = require('../models');
const bcryptjs =require('bcrypt');
const jwt = require('jsonwebtoken');

function sign_Up(req, res){
    const user ={
        nom : req.body.nom,
        email : req.body.email,
        password: req.body.password
    }
    models.User.create(user).then(result =>{
        res.status(201).json({
            massage:"User created successfully",
        });
    }).catch(error =>{
        res.status(500).json({
            massage:"erreur",
        });
    });
    
}
module.exports={
    sign_Up: sign_Up
}