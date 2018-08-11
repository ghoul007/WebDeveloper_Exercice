var express = require('express');
var router = express.Router();
var users = require('../public/users.json')

/* GET users listing. */
router.get('/', function(req, res, next) {

var info ='';

users.forEach(user => {
  info += `<h2>${user.name}</h2>
            <p>${user.description}</p>
  `
});

  res.send(info);
});

module.exports = router;
