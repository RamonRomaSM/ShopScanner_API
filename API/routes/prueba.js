var express = require('express');
var router = express.Router();
//Mio
/* GET users listing. */
router.get('/', function(req, res) {
    res.send('este es mi json');
});

module.exports = router;