const express = require("express");

exports.user = function (req, res, db) {
  db.userList((info) => {
    res.send(info);
  })
};

