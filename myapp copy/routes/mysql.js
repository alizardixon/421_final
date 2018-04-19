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


/*Get users listing*/
router.get('/drinkmenu', function(req, res, next) {
  con.query("SELECT restaurant.Name, food.fname, food.fprice FROM adixon17.restaurant JOIN adixon17.food JOIN adixon17.fmenu WHERE fmenu.fk_id_restaurant1=restaurant.idrestaurant AND fmenu.fk_id_food=food.idfood AND restaurant.idrestaurant='004'", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
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

router.post('/crud', function(req, res, next) {
  var sql = con.query("INSERT INTO adixon17.crud_company set ? ", req.body, function (err, result, fields) {
    if (err) throw err;
    
    console.log(sql);
    res.send(result);
  });
});

/*GET customers*/
router.get('/crud', function(req, res, next) {
  con.query("SELECT * FROM adixon17.crud_company", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

module.exports = router;

