var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');


router.post('/', function(req, res, next) {

    var id = req.body.id;
    var type = req.body.type;

    var query = db.query("INSERT INTO ticket (id, `type`) VALUES(?, ?)", [id, type]);

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