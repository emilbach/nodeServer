var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');


router.post('/', function(req, res, next) {

    var uid = req.body.uid;
    var fbname = req.body.fbname;
    var email = req.body.email;

    var query = db.query("INSERT INTO users (uid, fbname, email) VALUES(?, ?, ?)", [uid, fbname, email]);

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

    var query = db.query('SELECT email FROM users');
    query.then(
        function(users) {
            res.send(users);
        }
    );

});
module.exports = router;
