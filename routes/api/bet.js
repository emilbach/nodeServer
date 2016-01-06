var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');


router.post('/', function(req, res, next) {

    var id = req.body.id;
    var type = req.body.type;

    var query = db.query("INSERT INTO ticket (id, type) VALUES(?, ?)", [id, type]);

    query.then(
        function(ticket) {
            res.send('Success');
        },
        function (error) {
            console.log(error);
        }
    );

});
router.get('/', function(req, res, next) {

    var query = db.query('SELECT m.match_id, m.home, m.away, t.type, m.one, m.X, m.two FROM matches m, ticket t WHERE m.match_id = t.id ORDER BY t.id');
    query.then(
        function(matches) {
            res.send(matches);
        },
        function (error) {
            console.log(error);
        }
    );

});
module.exports = router;
