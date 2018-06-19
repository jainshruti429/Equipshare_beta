// functions/API of a general user.

// Loads up config for connection
var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

const notifier = require('node-notifier');

var nodemailer = require('nodemailer');
var bcrypt = require('bcrypt-nodejs');

// //=================================================

var ssn;//variable of session
var schedule = require('node-schedule');

var express  = require('express');
var app = express();
var crypto = require('crypto');

// //=================================================


var isLoggedIn = function(req, res) {  
        var x ;
        if (req.isAuthenticated()) x=1;
        else x = 0;
        return x;
    };

var index_featured = [];
connection.query("SELECT all_equipment.photo1, all_equipment.expected_price, all_equipment.subcategory,all_equipment.category, all_equipment.brand, all_equipment.model, all_equipment.id FROM all_equipment INNER JOIN featured ON featured.equip_id = all_equipment.id WHERE featured.display = 1",function(errf,featured){
    if(errf) throw errf;
    else index_featured = featured;
});

var index_cat = [];
connection.query("SELECT DISTINCT category FROM equipment_type", function(errc,cat_rows){
    if(errc) throw errc;
    else index_cat = cat_rows;
});

var msg;

module.exports = {

    index: function(req, res) {
            var username;
            var msg;
                if(req.session) {
                    username = req.session.name;
                    if(req.session.msg) {
                        msg = req.session.msg;
                        req.session.msg = '';
                    }
                    else msg = '';    
                }
                else username = '';
                                
        if(index_cat.length){
            connection.query("SELECT DISTINCT subcategory FROM equipment_type WHERE category = ?",[index_cat[0].category], function(err2, rows2){
                if(err2) throw err2;
                else res.render("./user_index.ejs", {featured : index_featured, cat_rows:index_cat, subcat_rows: rows2, isLoggedIn: isLoggedIn(req,res), selected : '', username : username, msg : msg});
            });
        }
        else res.render("./user_index.ejs", {featured : index_featured, cat_rows:index_cat, subcat_rows: [], isLoggedIn: isLoggedIn(req,res), selected : '', username : username, msg : msg}); 
    },

    featured: function(req,res){
        connection.query("SELECT views FROM featured WHERE equip_id = ?",[req.params.id],function(err,rows){
            if(err) throw err;
            else {
                var views = rows[0].views + 1;
                connection.query("UPDATE featured SET views = ? WHERE equip_id = ?",[views, req.params.id],function(err1,rows1){
                    if(err1) throw err1;
                    else{
                        connection.query("SELECT * FROM all_equipment WHERE id = ?",[req.params.id], function(err2, rows2){
                            if(err2) throw err2;
                            else {
                            	request = 1;
                            	connection.query("SELECT * FROM equipment_type WHERE type_id = ?" ,[rows2[0].type_id], function(err4, rows4){
				                    if(err4) throw err4;
				                    else res.render('./user_view.ejs', {equip_data : rows2, featured:index_featured, tech_info : rows4[0], request:request, isLoggedIn : isLoggedIn(req,res), username: req.session.name});                            
				                });
                            }		
                        });       
                    }
                });
            }
        });
    },

    login : function(req,res){
        res.render('./user_login.ejs' , {msg : 'Enter the following details', login_para : 1, id:req.params.id,  isLoggedIn : isLoggedIn(req,res)});
    },

    search_category : function(req,res){
        var cat_selected = req.query.category;
		var sql="SELECT DISTINCT subcategory FROM equipment_type WHERE category = ?";
		connection.query(sql, [cat_selected], function(err,result){
			if(err){res.end('error');}
	        else{ 
	        	res.send(result);
	        } 
		});  
    },

    search: function(req,res){
       connection.query("SELECT * FROM all_equipment WHERE available = 1 AND subcategory = ?",[req.body.subcategory],function(err,rows){
            if(err) throw err;
            else res.render('./user_view_equipment.ejs' , {datarows: rows,  isLoggedIn : isLoggedIn(req,res), username: req.session.name}); 
        });
    },

    email : function(req,res, next){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) dd = '0'+dd;
        if(mm<10) mm = '0'+mm; 
        today = dd + '/' + mm + '/' + yyyy;
        connection.query("INSERT INTO emails(email, date, resolved) VALUES(?,?,?)", [req.body.email, today, 0], function(err){
            if(err) throw err;
            else {
                req.session.msg = "Your inquiry is recorded"
                next();}
        });
    },

    // route to check that the client is loged in
    // need to change according to popup 
	isLoggedInfunc: function(req, res, next) {
        // if user is authenticated in the session, carry on else ask them to login again
	    if (req.isAuthenticated()) return next();
        else {
        	var id ; 
        	if(req.params.id) id = req.params.id;
        	else id = 0;
        	res.render('./user_login.ejs', {login_para : 1,msg:"PLease Login to continue", id:id , isLoggedIn : isLoggedIn(req,res) });
    	}
	},

    // Ends current session
	logoutfunc: function(req, res, next) {
        req.logout();
        req.session.destroy(function(err) {
            if(err) throw err;
            else next();
        });
    },

    view: function(req,res){
        connection.query("SELECT * FROM all_equipment WHERE id = ?",[req.params.id],function(err,rows){
            if (err) throw err;
            else{
                var request; //for the option of request...
                if(isLoggedIn(req,res)){
                    var viewer = req.session.user;
                    if (viewer == rows[0].owner_id) {request = 0;} //if one views details of his own equipment
                    else if(!req.session.category) {request = 1}
                    else{
                        request =1;
                        connection.query("SELECT * FROM views WHERE equip_id = ? AND viewer_id = ?",[req.params.id, viewer],function(err2, row2){
                            if(err2) throw err2;
                            if(!row2.length){ //if viewer is not already added in the list
                                connection.query("INSERT INTO views (equip_id, viewer_id) VALUES (?,?)", [req.params.id, viewer], function(err1){
                                    if(err1) throw err1;
                                });        
                            }
                        });
                    }
                }
                else {request = 1;}

                connection.query("SELECT * FROM equipment_type WHERE type_id = ?" ,[rows[0].type_id], function(err4, rows4){
                    if(err4) throw err4;
                    else res.render('./user_view.ejs', {equip_data : rows, featured:index_featured, tech_info : rows4[0], request:request , isLoggedIn : isLoggedIn(req,res), username: req.session.name});                            
                });
            }    
        });
    },

 
}

