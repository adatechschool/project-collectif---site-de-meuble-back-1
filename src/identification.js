//connexion package d'utilisation
const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;


exports.login = function (req, res, db){
    db.identificationLogin(req.body.mail, req.body.password,(connexion) =>{
        res.send(connexion);
    })
}

exports.signup = function (req, res, db){
    db.registrationUser(req.body.registrationUser,(connexion) =>{
        res.send(connexion);
    })
}

