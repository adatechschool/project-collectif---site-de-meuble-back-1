const express = require("express");
const mysql = require("mysql");

// MySQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql-adatech.alwaysdata.net",
  user: "adatech",
  password: "a0a19#a0a19",
  database: "adatech_bdd",
});

// get informations for page meubles

exports.list = function (req, res) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "SELECT nomproduit, prix, libelle_categorie, photo FROM Produit INNER JOIN Categorie ON Produit.Categorie_idcategorie = Categorie.idcategorie",
      (err, rows) => {
        connection.release(); // return the connection to pool

        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }

        // if(err) throw err
        console.log("The data from produit table are: \n", rows);
      }
    );
  });
};

// Retrieving furniture details
exports.details = function (req, res) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "SELECT nomproduit, description, dimension, prix, photo, libelle_categorie, libelle_couleur, libelle_matiere FROM Produit INNER JOIN Categorie ON Produit.Categorie_idcategorie=Categorie.idcategorie INNER JOIN Couleur ON Produit.Couleur_idcouleur=Couleur.idcouleur INNER JOIN Matiere ON Produit.Matiere_idmatiere=Matiere.idmatiere WHERE idproduit = ?",
      [req.params.id],
      (err, rows) => {
        connection.release(); // return the connection to pool
        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
};
