var csv = require('fast-csv');
var fs = require('fs');

var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

var express  = require('express');
var app = express();

var func_type = function(data){
	connection.query("INSERT INTO equipment_type (category, model, mapping_unit, max_dig_depth, engine_power, loader_capacity, showel_capacity, backhoe_bucket_capacity, weight, blade_capacity, doc1, doc2, subcategory, brand) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9],data[10],data[11],data[12],data[13]], function(err){
		if(err) throw err;
	});
};

// var func_equipment = function(data){
// 	connection.query("INSERT INTO all_equipment (category, model, mapping_unit, max_dig_depth, engine_power, loader_capacity, showel_capacity, backhoe_bucket_capacity, weight, blade_capacity, doc1, doc2, subcategory, brand) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9],data[10],data[11],data[12],data[13]], function(err){
// 		if(err) throw err;
// 	});
// };

module.exports = {

type_csv : function(req,res){

		file = req.files.csv;
		file.mv(file.name, function(err){
			if(err) throw err;
			else {
				var stream = fs.createReadStream(file.name);
				 
				var csvStream = csv()
				    .on("data", function(data){
				    func_type(data);	
				    })
				    .on("end", function(){
				    });
				 
				stream.pipe(csvStream);
			}
		});
	},

// equipment_csv : function(req,res){

// 		file = req.files.csv;
// 		file.mv(file.name, function(err){
// 			if(err) throw err;
// 			else {
// 				var stream = fs.createReadStream(file.name);
				 
// 				var csvStream = csv()
// 				    .on("data", function(data){
// 				    func_equipment(data);	
// 				    })
// 				    .on("end", function(){
// 				    });
				 
// 				stream.pipe(csvStream);
// 			}
// 		});
// 	}	
}
