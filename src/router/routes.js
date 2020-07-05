const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

const User = require('../models/User');


const UserController = require('../controllers/UserController');

const routes = express.Router();

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended: false}));

routes.get('/users', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../','views','index.html'))
});

routes.get('/home', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../','views','home.html'))
});


routes.post('/add', async (req, res)=>{
   await User.create({
        name: "Julio",
        email: req.body.id,
        password : req.body.passw
    }).then(()=>{
        res.redirect('/home')
    }).catch((erro)=>{
        res.send(erro)
    })
    
});


module.exports = routes;