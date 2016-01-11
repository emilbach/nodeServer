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
router.get('/ticket/:uid', function(req, res, next) {
    var uid = req.params.uid;

    var query = db.query("SELECT u.fbname, m.match_id, m.home, m.away, t.type, m.one, m.X, m.two FROM matches m, ticket t, users u WHERE m.match_id = t.id AND u.uid="+uid+" ORDER BY t.id");
    query.then(
        function(ticket) {
            res.send(ticket);
        },
        function (error) {
            console.log(error);
        }
    );

});
module.exports = router;
