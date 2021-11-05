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

app.get("/produit", (req, res) => {
  produit.list (req, res, db)
});
app.get("/produit/:id", (req, res) => {
  produit.details (req, res, db)
});

// app.post("/identification", identification.login);
// app.post("/identification/signin", identification.signin);

/*
// Delete a beer
app.delete("/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "DELETE FROM beers WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release(); // return the connection to pool
        if (!err) {
          res.send(
            `Beer with the record ID ${[req.params.id]} has been removed.`
          );
        } else {
          console.log(err);
        }

        console.log("The data from beer table are: \n", rows);
      }
    );
  });

});

// Add beer
app.post("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

    const params = req.body;
    connection.query("INSERT INTO beers SET ?", params, (err, rows) => {
      connection.release(); // return the connection to pool
      if (!err) {
        res.send(`Beer with the record ID  has been added.`);
      } else {
        console.log(err);
      }

      console.log("The data from beer table are:11 \n", rows);
    });
  });
});

app.put("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    const { id, name, tagline, description, image } = req.body;

    connection.query(
      "UPDATE beers SET name = ?, tagline = ?, description = ?, image = ? WHERE id = ?",
      [name, tagline, description, image, id],
      (err, rows) => {
        connection.release(); // return the connection to pool

        if (!err) {
          res.send(`Beer with the name: ${name} has been added.`);
        } else {
          console.log(err);
        }
      }
    );

    console.log(req.body);
  });
});
*/

// Listen on enviroment port or 5000

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;