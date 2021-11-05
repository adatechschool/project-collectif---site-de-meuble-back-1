//connexion package d'utilisation
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//routage entre les différents fichiers de requêtes
const identification = require("./identification");

const app = express();
const port = process.env.PORT || 4000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// MySQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql-adatech.alwaysdata.net",
  user: "adatech",
  password: "a0a19#a0a19",
  database: "adatech_bdd",
});

exports.login = function (req, res) {
    pool.getConnection ((err, connection) => {
        app.post('/user', function (req, res) {    
            pool.Utilisateur.findOne({          
                where: {              
                    mail: req.body.email                 
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

