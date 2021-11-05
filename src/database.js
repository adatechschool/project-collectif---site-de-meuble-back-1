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
    
}

