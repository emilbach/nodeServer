var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var query = db.query('SELECT m.*, GROUP_CONCAT(t.name) AS names FROM matches m LEFT JOIN teams t ON m.match_id = t.match_id GROUP BY m.match_id');
    query.then(
        function(matches) {
            res.send(matches);
        }
    );

});
module.exports = router;
