//connexion package d'utilisation
const express = require("express");
const mysql = require("mysql");
const DataBaseController = require("./database");

//routage entre les différents fichiers de requêtes
const produit = require("./produit");
const app = express();
const port = process.env.PORT || 4000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// MySQL
const db = new DataBaseController();

//récuperer la liste des produits
app.get("/produit", (req, res) => {
  produit.list (req, res, db)
});

//récupérer infos sur un produit
app.get("/produit/:id", (req, res) => {
  produit.details (req, res, db)
});

//comparer mail et mdp utilisateur à la bdd
app.post("/identification", (req, res) => {
  identification.login (req, res, db)
});

//ajouter utilisateur à la bdd
// app.post("/identification/signin", identification.signin);


// Listen on enviroment port or 5000

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;