var express = require('express');
var router = express.Router();

// Import our models file to the router
var models = require('../models/models');

// Connect to the database over Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var fakeDb = [];
/* GET home page. */
router.get('/', function(req, res, next) {
	models.Photo.find({}, function(err, results){
		res.render('index', { name: 'R.Albums', "books": results });
	});
});

router.post('/', function(req, res, next) {
	var newPhoto = new models.Photo({
	    url: req.body['photoUrl'],
	    caption: req.body['caption']
	  });
	newPhoto.save(function(err, result){
		console.log(err);
		if ( err ) {
			console.log(err);
			process.exit(1);
		}
		res.redirect('/');
	});
});

router.get('/photo/:id', function(req, res, next){
	models.Photo.find({_id: req.params.id}, function(err, result){
		console.log(result);
		res.render('photo', {
			result: result[0]
		});
	});
});
module.exports = router;
