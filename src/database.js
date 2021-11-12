const mysql = require("mysql");

// MySQL
module.exports = class DataBaseController {
    constructor () {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: "mysql-adatech.alwaysdata.net",
            user: "adatech",
            password: "a0a19#a0a19",
            database: "adatech_bdd",
        });
    }
    productList (callback) {
        this.pool.getConnection ((err, connection) => {
            if (err) throw err;
            connection.query(
                "SELECT nomproduit, prix, libelle_categorie, photo FROM Produit INNER JOIN Categorie ON Produit.Categorie_idcategorie = Categorie.idcategorie",
                (err, rows) => {
                    connection.release(); // return the connection to pool
                    if (!err) {
                        callback(rows);
                    } else {
                        console.log(err);
                    }
                    // if(err) throw err
                    console.log("The data from produit table are: \n", rows);
                }
            );
        });
    }
    productDetail (productId, callback) {
        this.pool.getConnection ((err, connection) => {
            if (err) throw err;
            connection.query(
            "SELECT nomproduit, description, dimension, prix, photo, libelle_categorie, libelle_couleur, libelle_matiere FROM Produit INNER JOIN Categorie ON Produit.Categorie_idcategorie=Categorie.idcategorie INNER JOIN Couleur ON Produit.Couleur_idcouleur=Couleur.idcouleur INNER JOIN Matiere ON Produit.Matiere_idmatiere=Matiere.idmatiere WHERE idproduit = ?", 
            [productId],
            (err, rows) => {
                connection.release(); // return the connection to pool
                if (!err) {
                    callback(rows);
                } else {
                    console.log(err);
                }
            }
            );
        })
    }

    userList (callback) {
        this.pool.getConnection ((err, connection) => {
            if (err) throw err;
            connection.query(
                "SELECT idClient, nom, prenom, mail, mdp, adresse, codepostal, ville, telephone, Statut_idstatut FROM Utilisateur", 
                (err, rows) => {
                    connection.release(); // return the connection to pool
                    if (!err) {
                        callback(rows);
                    } else {
                        console.log(err);
                    }
                    // if(err) throw err
                    console.log("The data from produit table are: \n", rows);
                }
            );
        });
    }
    
    identificationLogin (mail, password, callback) {
        this.pool.getConnection ((err, connection) => {
            if (err) throw err;
            connection.query(
                "SELECT * FROM Utilisateur WHERE mail, mdp LIKE",[mail],[password],
            (err, rows) => {
                connection.release(); 
                if (!err) {
                    callback(rows);
                } else {
                    console.log(err);
                }
            })  
        })
    }

    //Code trouvé sur le net à tester pour le login avec cryptage du mdp

    // exports.login = function (req, res, db) {
    //     db.identificationLogin(login) {
    //         app.post('/user', function (req, res) {    
    //             db.Utilisateur.findOne({          
    //                 where: {              
    //                     mail: req.body.mail                 
    //                 }     
    //             }).then(function (user) {         
    //                 if (!user) {            
    //                     res.redirect('/');         
    //                 } else {bcrypt.compare(req.body.password, user.mdp, function (err, result) {        
    //                     if (result == true) {            
    //                         res.redirect('/produit');        
    //                     } else {         
    //                         res.send('Incorrect password');         
    //                         res.redirect('/');        
    //                     }      
    //                 });     
    //             }  
    //         });
    //         });
    //     });
    // }

    registrationUser () {
        this.pool.getConnection ((idClient, nom, prenom, mail, mdp, adresse, codepostal, ville, telephone, Statut_idstatut, err, connection) => {
            if (err) throw err;
            connection.query(
            "INSERT INTO Utilisateur (Null, nom, prenom, mail, mdp, adresse, codepostal, ville, telephone, Statut_idstatut) VALUES" (Null, nom, prenom, mail, mdp, adresse, codepostal, ville, telephone, 2),
            () => {
                connection.release(); // return the connection to pool
                
            }
            );
        })
    }
    

}

