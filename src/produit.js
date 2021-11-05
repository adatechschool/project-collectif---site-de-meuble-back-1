const express = require("express");

// get informations for page meubles
exports.list = function (req, res, db) {
  db.productList((list) => {
    res.send(list);
  })
};

// Retrieving furniture details
exports.details = function (req, res, db) {
  db.productDetail(req.params.id,(produit) => {
    res.send(produit);
  })
};
