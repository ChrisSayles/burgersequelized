var express = require("express");
var router = express.Router();
var models = require("../models");

//route will be set to /burgers by default
router.get('/', function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    models.burgers.findAll()
        .then(function(data) {
            var hbsObject = { burgers: data };
            res.render("index", hbsObject);
        });
});

router.post('/burgers/create', function(req, res) {
    models.burgers.create({
        burger_name: req.body.name,
    }).then(function() {
        res.redirect('/');
    });
});



router.put("/burgers/update/:id", function(req,res){
  models.burgers.update({
    devoured: true
  },{
    where: {
      id: req.params.id
    }
  }).then(function(data){
    res.redirect("/burgers");
  });
  });



// Export routes for server.js to use.
module.exports = router;
