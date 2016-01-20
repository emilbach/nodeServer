var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');


router.post('/', function(req, res, next) {

    var id = req.body.id;
    var type = req.body.type;
    var email = req.body.email;

    var query = db.query("INSERT INTO ticket (id, type, email) VALUES(?, ?, ?)", [id, type, email]);

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

    var query = db.query("SELECT DISTINCT u.fbname,t.email,m.match_id,m.home,m.away,t.type,m.one,m.X,m.two FROM matches m, ticket t, users u WHERE m.match_id=t.id AND u.email = t.email ORDER BY t.id");
    query.then(
        function(ticket) {
            res.send(ticket);
        },
        function (error) {
            console.log(error);
        }
    );

});
router.get('/:email', function(req, res, next) {
    var email = req.params.email;

    var query = db.query("SELECT u.fbname, m.match_id, m.home, m.away, t.type, m.one, m.X, m.two FROM matches m, ticket t, users u WHERE m.match_id=t.id AND u.email='"+email+"' ORDER BY t.id");
    query.then(
        function(ticket) {
            res.send(ticket);
        },
        function (error) {
            console.log(error);
        }
    );

});
router.delete('/', function(req, res, next) {

    var id = req.query.id;

    var query = db.query("DELETE FROM ticket WHERE id = " + id);

    query.then(
        function(ticket) {
            res.send('Success');
        },
        function (ticket) {
            console.log(error);
        }
    );

});
module.exports = router;
