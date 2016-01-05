var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');


router.post('/', function(req, res, next) {

    var id = req.body.id;
    var email = req.body.email;

    var query = db.query("INSERT INTO users (id, email) VALUES(?, ?)", [id, email]);

    query.then(
        function(ticket) {
            res.send('Success');
        },
        function (error) {
            console.log(error);
        }
    );

});
module.exports = router;
