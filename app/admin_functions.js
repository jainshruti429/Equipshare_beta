// Admin routes functions

// load all the things we need.
var others = require('./others');
var bcrypt = require('bcrypt-nodejs');

var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

// ========================================================
var express  = require('express');
var app = express();

// =========================================================

var cat_rows = [];
connection.query("SELECT DISTINCT category FROM equipment_type", function(errc,crows){
    if(errc) throw errc;
    else cat_rows = crows;
});

module.exports = {

	//================================================================================
    //======================= ADMIN FUNCTIONS ========================================
    //================================================================================
    //get_login and post_login in routes page...passport k pain tha
    
    featured: function(req,res){
        connection.query("SELECT * FROM featured WHERE display = 1", function(err,rows){
            if(err) throw err;
            else res.render('./Profiles/admin/featured.ejs' , {datarows: rows});
        });    
    },

    remove_featured: function(req,res){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) dd = '0'+dd;
        if(mm<10) mm = '0'+mm; 
        today = dd + '/' + mm + '/' + yyyy;

        connection.query("UPDATE featured SET display = 0, end_date =? WHERE equip_id = ?",[today,req.params.id],function(err){
            if(err) throw err;
            else{
                connection.query("SELECT * FROM featured WHERE display = 1", function(err,rows){
                    if(err) throw err;
                    else res.render('./Profiles/admin/featured.ejs' , {datarows: rows});
                });    
            }
        });
    },

    get_reset_password : function(req,res){
        res.render("./reset_password.ejs", {msg:''});
    },

    post_reset_password : function(req,res, next){
        connection.query("SELECT password FROM account WHERE id = ?",[req.session.user], function(err,rows){
            if(err) throw(err);
            else{
                if(!bcrypt.compareSync(req.body.old_password, rows[0].password)) return res.render("./user/reset_password.ejs", {msg:'Old Password is incorrect'});
                if(req.body.new_password != req.body.retype_new_password) return res.render("./user/reset_password.ejs", {msg:'Passwords do not match'});
                else{
                   var new_password = bcrypt.hashSync(req.body.new_password, null, null);
                   connection.query("UPDATE account SET password = ? WHERE id = ?",[new_password,req.session.user], function(err,rows){
                    if(err) throw err;
                    else res.render("./user/reset_password.ejs", {msg:'Password is changed'});
                   });     
                }
            }
        });
    },

    get_update_this_equipment: function(req, res){
    connection.query("SELECT * FROM all_equipment WHERE id = ?" ,[req.params.id],function(err,rows){
            if (err) throw err;
            else res.render('./update.ejs' , {equip_data : rows[0]});
        });
    },
    
    post_update_this_equipment: function(req, res){
         var updateQuery = "UPDATE all_equipment SET brand =?, model=?, expected_price=?, year=?, colour=?, subcategory=?, description=?, km=? WHERE id =?";
                connection.query(updateQuery, [req.body.brand, req.body.model, req.body.varient, req.body.expected_price, req.body.year, req.body.colour, req.body.subcategory, req.body.description,req.body.km, req.params.id],function (err, rows) {
                    if (err) throw err;
                    else {
                        if(req.session.category) return res.render('./Profiles/user/homepage.ejs',{msg : 'Equipment Updated'});
                        else return res.render('./Profiles/admin/homepage.ejs',{msg : 'Equipment Updated'});       
                    }
                });

    },


    get_add_featured: function(req,res){
        connection.query("SELECT * FROM all_equipment WHERE available = 1", function(err, rows){
            if (err) throw err;
            else res.render('./Profiles/admin/add_featured.ejs',{datarows:rows});
        });
    },

    post_add_featured: function(req,res){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) dd = '0'+dd;
        if(mm<10) mm = '0'+mm; 
        today = dd + '/' + mm + '/' + yyyy;

        connection.query('SELECT * FROM featured WHERE equip_id=?',[req.params.id],function(err1,rows1){
            if(err) throw err;
            if(rows.length) res.render('./Profiles/admin/add_featured.ejs',{datarows:rows});
            else{
                connection.query("INSERT INTO featured (equip_id,display,start_date, views) VALUES (?,?,?,?)",[req.params.id,1,today,0], function(err){
                    if (err) throw err;
                    else {
                        connection.query("SELECT * FROM all_equipment WHERE available = 1", function(err, rows){
                            if (err) throw err;
                            else res.render('./Profiles/admin/add_featured.ejs',{datarows:rows});
                        });
                    }
                });
            }
        });
    },

    my_equipment: function(req , res){
        connection.query("SELECT * FROM all_equipment WHERE owner_id = ?" ,[req.session.user],function(err,rows){
            if (err) throw err ; 
            else res.render('./Profiles/user/my_equipment.ejs' , {datarows: rows});
        });
    },

    inquiry : function(req, res){
        connection.query("SELECT * FROM emails WHERE resolved = 0",function(err,rows){
            if(err) throw err;
            else res.render('./admin/inquiry.ejs',{datarows:rows});
        });
    },

    resolved : function(req,res){
        connection.query("UPDATE emails SET resolved = 1 WHERE sno = ?",[req.params.sno], function(err){
            if(err) throw err;
            else return next();
        });
    },

    get_add_new_admin: function(req,res){
    	res.render('./Profiles/admin/add_new_admin.ejs', {msg: 'Enter the following details' });
    },

    post_add_new_admin: function(req,res){
    	if(req.body.password == req.body.retype_password){
        connection.query("SELECT * FROM account WHERE name = ?",[req.body.name], function(err, rows) {
            if (err) throw err;
            if (rows.length) res.render('./Profiles/admin/add_new_admin.ejs', {msg: 'That name is already taken' });
            else {
   	            // insert data into account table
                var newAdmin = {
                        name: req.body.name,
                        password: bcrypt.hashSync(req.body.password, null, null),  // use the generateHash function in our user model
                        category: 0,
                        email: req.body.email,
                        mobile: req.body.mobile
                    };
                var insertQuery1 = "INSERT INTO account ( name, email, mobile, category, password) values (?,?,?,?,?)";
                connection.query(insertQuery1,[newAdmin.name, newAdmin.email, newAdmin.mobile,newAdmin.category,newAdmin.password,], function(err) {
                    if (err) throw err;
    				else res.render('./Profiles/admin/homepage.ejs' ,{msg:'Admin '+req.body.name+ ' added'});
	            });
            }
        });
        }
        else res.render('./Profiles/admin/add_new_admin.ejs', {msg:'Passwords do not match'});
    },

    home:function(req, res) {
        res.render('./Profiles/admin/homepage.ejs', {msg:('Welcome'+req.session.name)});
    },
    
    get_add_equipment_type : function(req,res){
        res.render('./Profiles/admin/add_equipment_type.ejs');
    },

    post_add_equipment_type :  function(req,res){
        connection.query("SELECT * FROM equipment_type WHERE (category = ? AND subcategory = ? AND brand = ? AND model = ?)",[req.body.category, req.body.subcategory, req.body.brand, req.body.model], function(err1, rows1) {
            if (err1) throw err1;
            if(!rows1.length){
                var insertQuery = "INSERT INTO equipment_type (category, subcategory) values (?,?)";
                    connection.query(insertQuery,[req.body.category, req.body.subcategory],function(err){ 
                        if (err) throw err;
                        else res.render("Added new Equipment type");
                });
            }
        });
    },  
    
    views:  function(req, res){    
        connection.query("SELECT * FROM views WHERE equip_id = ?",[req.params.equip_id], function(err,rows){
            if (err) throw err;
            if(rows.length){
                var str = "SELECT * FROM account WHERE (id = ";
                str += rows[0].viewer_id;
                for(var i = 1; i< rows.length; i++){
                    str += " OR id =";
                    str+= rows[i].viewer_id;
                }
                str += ")"; 
                connection.query(str, function(err1, row1){
                    if(err1) throw err1;
                    else res.render("./Profiles/user/viewers.ejs", {data_row:row1});
                });
            }
            else res.render('./Profiles/user/homepage.ejs', {msg : 'No Viewers yet'});
        });
    },

    requests : function(req, res){
         connection.query("SELECT * FROM requests WHERE equip_id = ?",[req.params.equip_id], function(err,rows){
            if (err) throw err;
            if(rows.length){
                var str = "SELECT * FROM account WHERE (id = ";
                str += rows[0].applicant_id;
                for(var i = 1; i< rows.length; i++){
                    str += " OR id =";
                    str+= rows[i].applicant_id;
                }
                str += ")"; 
                connection.query(str, function(err1, row1){
                    if(err1) throw err1;
                    else res.render("./Profiles/user/applicants.ejs", {data_row:row1});
                });
            }
            else res.render('./Profiles/user/homepage.ejs', {msg : 'No Requests yet'});
        });
    },

    view_all_equipments: function(req , res){
        connection.query("SELECT * FROM all_equipment",function(err,rows){
            if (err) throw err; 
            else res.render('./Profiles/admin/view_all_equipments.ejs' , {datarows: rows});
        });
    },
    //has to be changed....
    view_equipment: function(req , res){
        connection.query("SELECT * FROM all_equipment WHERE available = 1",function(err,rows){
            if (err) throw err ; 
            else res.render('./Profiles/admin/view_equipment.ejs' , {datarows: rows});
        });
    },

    unavailable: function(req,res){
        connection.query("UPDATE all_equipment SET available = 0 WHERE id = ?",[req.params.id], function(err, rows){
            if(err) throw err;
            else{res.render("./Profiles/admin/homepage.ejs",{msg :"Marked unavailable...."});}
        });
    },

    get_add_equipment: function(req,res){
        connection.query("SELECT DISTINCT subcategory FROM equipment_type WHERE category = ?",[cat_rows[0].category], function(err1, subcat_rows){
            if (err1) throw err1;
            else{
                connection.query("SELECT brand FROM equipment_type WHERE subcategory = ? AND category = ?",[subcat_rows[0].subcategory ,cat_rows[0].category], function(err2, brand_rows){    
                    if (err2) throw err2;
                    else{
                        connection.query("SELECT model FROM equipment_type WHERE brand = ? AND subcategory = ? AND category = ?", [brand_rows[0].brand, subcat_rows[0].subcategory ,cat_rows[0].category],function(err3, model_rows){
                            if(err3) throw err3;
                            else{
                                var data ={
                                    brand : '',
                                    model : '',
                                    varient : '',
                                    colour : '',
                                    year: 0,
                                    km : 0,
                                    state: '',
                                    expected_price: 0,
                                    description: ''
                                };
                                res.render('./user_add_equipment.ejs', {msg : 'Please enter the following details',data:data, cat_rows:cat_rows, name_rows:name_rows, brand_rows:brand_rows, model_rows:model_rows, cat_selected: '', subcat_selected : '', brand_selected : ''});          
                            }
                        });
                    }
                });                          
            }
        });
    },

    get_update_profile:  function(req, res){
        connection.query("SELECT * FROM account WHERE id = ?" ,[req.session.user],function(err,rows){
            if (err) throw err ;
            else res.render('./update_profile.ejs' , {msg : '' , user_data : rows[0]});
        });
    },

    post_update_profile :  function(req, res){
        var updateQuery = "UPDATE account SET email = ?, address = ?, city = ?, state = ?, country = ?, zipcode = ? WHERE id =?";
        connection.query(updateQuery, [req.body.email, req.body.address, req.body.city, req.body.state, req.body.country, req.body.zipcode, req.session.user],function (err, rows) {
            if (err) throw err;
            else {
                connection.query("SELECT * FROM account WHERE id = ?" ,[req.session.user],function(err1,rows1){
                    if (err) throw err ;
                    else res.render('./update_profile.ejs' , {msg : 'Profile Updated' , user_data : rows1[0]});
                });          
            }
        });
    },

    post_add_equipment_category: function(req,res){
        connection.query("SELECT DISTINCT subcategory FROM equipment_type WHERE category = ?",[req.body.category], function(err1, subcat_rows){
            if (err1) throw err1;
            else{
                connection.query("SELECT brand FROM equipment_type WHERE subcategory = ? AND category = ?",[subcat_rows[0].subcategory ,req.body.category], function(err2, brand_rows){    
                    if (err2) throw err2;
                    else{
                        connection.query("SELECT model FROM equipment_type WHERE brand = ? AND subcategory = ? AND category = ?", [brand_rows[0].brand, subcat_rows[0].category ,req.body.category],function(err3, model_rows){
                            if(err3) throw err3;
                            else{
                                var data ={
                                    brand : '',
                                    model : '',
                                    colour : '',
                                    year: 0,
                                    km : 0,
                                    state: '',
                                    expected_price: 0,
                                    description: ''
                                };
                                res.render('./user_add_equipment.ejs', {msg : 'Please enter the following details',data:data, cat_rows:cat_rows, subcat_rows:subcat_rows, brand_rows:brand_rows, model_rows:model_rows, cat_selected: req.body.category , subcat_selected : '', brand_selected : ''});          
                            }
                        });
                    }
                });                          
            }
        });
    },

    post_add_equipment_subcategory: function(req,res){
        connection.query("SELECT DISTINCT subcategory FROM equipment_type WHERE category = ?",[req.body.category], function(err1, subcat_rows){
            if (err1) throw err1;
            else{
                connection.query("SELECT brand FROM equipment_type WHERE category = ? AND category = ?",[req.body.category ,req.body.category], function(err2, brand_rows){    
                    if (err2) throw err2;
                    else{
                        connection.query("SELECT model FROM equipment_type WHERE brand = ? AND subcategory = ? AND category = ?", [brand_rows[0].brand, req.body.subcategory ,req.body.category],function(err3, model_rows){
                            if(err3) throw err3;
                            else{
                                var data ={
                                    brand : '',
                                    model : '',
                                    colour : '',
                                    year: 0,
                                    km : 0,
                                    state: '',
                                    expected_price: 0,
                                    description: ''
                                };
                                res.render('./admin_add_equipment.ejs', {msg : 'Please enter the following details',data:data, cat_rows:cat_rows, subcat_rows:subcat_rows, brand_rows:brand_rows, model_rows:model_rows, cat_selected: req.body.category , subcat_selected : req.body.subcategory, brand_selected : ''});          
                            }
                        });
                    }
                });                          
            }
        });
    },

    post_add_equipment_brand: function(req,res){
        connection.query("SELECT DISTINCT subcategory FROM equipment_type WHERE category = ?",[req.body.category], function(err1, subcat_rows){
            if (err1) throw err1;
            else{
                connection.query("SELECT brand FROM equipment_type WHERE subcategory = ? AND category = ?",[req.body.subcategory ,req.body.category], function(err2, brand_rows){    
                    if (err2) throw err2;
                    else{
                        connection.query("SELECT model FROM equipment_type WHERE brand = ? AND subcategory = ? AND category = ?", [req.body.brand, req.body.subcategory ,req.body.category],function(err3, model_rows){
                            if(err3) throw err3;
                            else{
                                var data ={
                                    brand : '',
                                    model : '',
                                    colour : '',
                                    year: 0,
                                    km : 0,
                                    state: '',
                                    expected_price: 0,
                                    description: ''
                                };
                                res.render('.admin_add_equipment.ejs', {msg : 'Please enter the following details',data:data, cat_rows:cat_rows, subcat_rows:subcat_rows, brand_rows:brand_rows, model_rows:model_rows, cat_selected: req.body.category , subcat_selected : req.body.subcategory, brand_selected : req.body.brand});          
                            }
                        });
                    }
                });                          
            }
        });
    },

    post_add_equipment: function( req, res ){
        var name = {
                    category : req.body.category,   
                    brand: req.body.brand,
                    model: req.body.model,
                    expected_price: req.body.expected_price,
                    year: req.body.year,
                    colour: req.body.colour,
                    subcategory: req.body.subcategory,
                    description: req.body.description,
                    km: req.body.km,
                    state : req.body.state,
                    available : 1
        };       
        var owner_id = req.session.user; 
        connection.query("SELECT name, address, city FROM account WHERE id = ?", [owner_id], function(err,rows){
            if (err) throw err;
            else {
                var owner_name = rows[0].name;
                var locality = rows[0].address;
                var city = rows[0].city;
                var photo1 = req.files.photo1;
                var photo1name = photo1.name;
                var result = photo1name.split('.');
                var img_name = req.session.user+'_1.'+result.slice(-1) ;
                console.log(img_name);
                photo1.mv('images/'+img_name, function(err3){           
                    if (err3) throw(err3);
                    else{
                        var insertQuery = "INSERT INTO all_equipment (state,photo1,available,category, brand, model, expected_price, year, colour, city, locality,subcategory, description, km, owner_name, owner_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                        connection.query(insertQuery, [name.state,img_name, name.available, name.category,name.brand, name.model, name.expected_price, name.year, name.colour, city, locality, name.subcategory, name.description,name.km,owner_name,owner_id],function(err4){
                            if (err4) throw err4;
                            else res.render('./admin/home.ejs',{msg : 'Equipment Added Successfully'});
                        });
                    }
                }); 
            } 
        });
    },

    
}