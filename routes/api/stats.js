var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var query = db.query('SELECT * FROM teams, team_stats WHERE teams.id = team_stats.id ORDER BY team_stats.group, team_stats.rank ASC');
    query.then(
        function(team_stats) {
            res.send(team_stats);
        }
    );

});

router.get('/:id', function(req, res, next) {

    var id = req.params.id;

    var query = db.query("SELECT * FROM teams,team_stats WHERE teams.id = team_stats.id AND team_stats.id = " + id);

    query.then(
        function(team_stats) {
            res.send(team_stats);
        },
        function (error) {
            console.log(error);
        }
    );

});

module.exports = router;
