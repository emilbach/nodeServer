var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var query = db.query('SELECT * FROM teams, matches WHERE teams.match_id = matches.match_id');
    query.then(
        function(team_stats) {
            res.send(team_stats);
        }
    );

});
module.exports = router;
