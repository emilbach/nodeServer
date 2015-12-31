var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var query = db.query('SELECT * FROM matches ORDER BY match_id');
    query.then(
        function(matches) {
            res.send(matches);
        }
    );

});
module.exports = router;
