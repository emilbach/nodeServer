var express = require('express');
var router = express.Router();
var db = require('../../helpers/db.js');

router.get('/', function(req, res, next) {

    var query = db.query('SELECT * FROM news');
    query.then(
        function(news) {
            res.send(news);
        }
    );

});

module.exports = router;
