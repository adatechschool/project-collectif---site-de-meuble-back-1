//connexion package d'utilisation
const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.login = function (req, res, db) {
    db.identificationLogin(login) {
        app.post('/user', function (req, res) {    
            db.Utilisateur.findOne({          
                where: {              
                    mail: req.body.mail                 
                }     
            }).then(function (user) {         
                if (!user) {            
                    res.redirect('/');         
                } else {bcrypt.compare(req.body.password, user.mdp, function (err, result) {        
                    if (result == true) {            
                        res.redirect('/produit');        
                    } else {         
                        res.send('Incorrect password');         
                        res.redirect('/');        
                    }      
                });     
            }  
        });
        });
    });
}

