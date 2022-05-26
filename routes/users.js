var express = require('express');
var router = express.Router();

const users = require('../bin/data/users.json')
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  
});
router.get('/:id', function(req, res, next) {
  const user =user.find((u)=> u.id === parseInt(req.params.id))
  const r= user ? user : 'not found'
  res.send(r);
});
module.exports = router;
