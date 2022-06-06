const express = require('express');
const app = express();
const bcrypt = require('bcrypt')


const users = []
app.get('/user',(req, res)=>{
    res.json(users)
})
