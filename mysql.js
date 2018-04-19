var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ilab.engr.utk.edu",
  user: "adixon17",
  password: "adixon17@421"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //res.send('MySQL::Connected!');
  });

/* GET users listing. */
router.get('/student', function(req, res, next) {
	con.query("SELECT * FROM adixon17.student", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});
/*Get users listing*/
router.get('/balter', function(req, res, next) {
  con.query("SELECT restaurant.Name, drink.dname, drink.dprice FROM adixon17.dmenu JOIN adixon17.restaurant JOIN adixon17.drink WHERE dmenu.fk_id_drink=drink.iddrink AND dmenu.fk_id_restaurant=restaurant.idrestaurant AND restaurant.idrestaurant='005';", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* GET users listing. */
router.get('/happyhours', function(req, res, next) {
  con.query("SELECT restaurant.Name, happyhour.drink_discout, happyhour.food_discount, happyhour.time FROM adixon17.restaurant JOIN adixon17.happyhour WHERE happyhour.fk_restaurant_id=restaurant.idrestaurant", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* GET users listing. */
router.get('/chilismenu', function(req, res, next) {
  con.query("SELECT restaurant.Name, food.fname, food.fprice FROM adixon17.restaurant JOIN adixon17.food JOIN adixon17.fmenu WHERE fmenu.fk_id_restaurant1=restaurant.idrestaurant AND fmenu.fk_id_food=food.idfood AND restaurant.idrestaurant='004'", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});



/* Post student data. */
router.post('/student', function(req, res, next) {
  var sql = con.query("INSERT INTO adixon17.student set ? ", req.body, function (err, result, fields) {
    if (err) throw err;
    
    console.log(sql);
    res.send(result);
  });
});

/*GET customers*/
router.get('/customer', function(req, res, next) {
  con.query("SELECT * FROM adixon17.customer", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

module.exports = router;

