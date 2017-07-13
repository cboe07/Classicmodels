var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// Include config file. Go up from routes, down into config
var config = require('../config/config');

// include b-crypt for hashing password
var bcrypt = require('bcrypt-nodejs');
// include rand token for generating user token
var randToken = require('rand-token');

// setup the connection with options
var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
});
// Actually make the connection
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/productlines/get', (req,res)=>{
	const selectQuery = "SELECT * FROM productlines"
	connection.query(selectQuery,(error,results,fields)=>{
		if(error){
			res.json(error);
		}else{
			res.json(results);
		}
	})
})

router.post('/register', (req,res)=>{
	const name = req.body.name;
	const email = req.body.email;
	const accountType = 'customer';
	const password = bcrypt.hashSync(req.body.password);
	// console.log(req.body)
	const city = req.body.city;
	const state = req.body.state;
	const salesRep = req.body.salesRep
	const creditLimit = 16000000


	// We want to insert the user into 2 tables: Customers and Users.
	// Users needs the customerNumber from the customers table.
	// Therefore, we need to insert the user into Customers first...
	// get the ID created by that insert, THEN insert the user into USers...

	// Customers insert query
	var insertIntoCust = "INSERT INTO customers (customerName,city,state,salesRepEmployeeNumber,creditLimit) VALUES (?,?,?,?,?)"
	// Run the query (for now autoset the sales re to 1337)
	connection.query(insertIntoCust, [name,city,state,1337,creditLimit],(error,results,fields)=>{
		// console.log(error)
		// console.log(results)
		// Get the ID that was used in the customers insert
		const newId = results.insertId
		// Get the current timestamp
		var currTimeStamp = Date.now() / 1000
		// Set up a token for this user. We will give this back to React
		var token = randToken.uid(40);
		// Users insert query
		var insertQuery = "INSERT INTO users (uid,type,password,created,token) VALUES (?,?,?,?,?)"
		// Run query. Use error2 andresults2 bc error and results used already
		
		connection.query(insertQuery,[newId,accountType,password,currTimeStamp,token],(error2,results2)=>{
			if(error){
				res.json({
					msg: error2
				})
			}else{
				res.json({
					msg: "userInserted",
					token: token
				})
			}
		})
		
	})
})


module.exports = router;









