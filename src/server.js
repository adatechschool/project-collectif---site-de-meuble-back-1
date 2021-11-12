//connexion package d'utilisation
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const DataBaseController = require("./database");
const router = express.Router();
const validator = require("express-validator");


//routage entre les différents fichiers de requêtes
const produit = require("./produit");
const identification = require("./identification");
const user = require("./user")
const app = express();
const port = process.env.PORT || 4000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// parse application/json
app.use(express.json());

// gestion des CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
app.get("/identification", (req, res) => {
  identification.login (req, res, db)
  res.send("blabla")
});

app.get("/user", (req, res) => {
  user.user (req, res, db)
  
});

//ajouter utilisateur à la bdd
app.get("/identification/signup", (req, res,next) => {
  console.log(req.body)
  identification.signup (req, res, db)
  res.send({identification})
});

app.post('http://localhost:3000/Inscription', (req, res) => {
  const nom = req.body.nom
  const prenom = req.body.prenom
  const mail = req.body.mail
  const mdp = req.body.mdp
  const adresse = req.body.adresse
  const codepostal = req.body.codepostal
  const ville = req.body.ville
  const telephone = req.body.telephone
  const Statut_idstatut = 2
  res.end()
});





// Listen on enviroment port or 5000

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;