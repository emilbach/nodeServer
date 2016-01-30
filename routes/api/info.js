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

    var query = db.query("SELECT * FROM information ORDER BY id");
    query.then(
        function(information) {
            res.send(ticket);
        },
        function (error) {
            console.log(error);
        }
    );

});
router.delete('/', function(req, res, next) {

    var id = req.body.id;

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
