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
        str1 = "SELECT featured.views, featured.start_date, featured.end_date, featured.display,all_equipment.photo1, all_equipment.expected_price, all_equipment.owner_id, all_equipment.subcategory, all_equipment.brand, all_equipment.model, all_equipment.id FROM all_equipment INNER JOIN featured ON featured.equip_id = all_equipment.id";
        connection.query(str1, function(err,rows){
            if(err) throw err;
            else{
                var current = [];
                var old = []
                var j =0;
                var k =0;
                for(var i = 0; i<rows.length; i++){
                    if(rows[i].display){
                        current[j] = rows[i];
                        j++;
                    }
                    else{
                        old[k] = rows[i];
                        k++;
                    } 
                }
                str2 = "SELECT name, address1, address2, address3, city, state, zipcode, mobile FROM account WHERE id = ? OR id = ? OR id = ? ";
                connection.query(str2, [current[0].owner_id,current[1].owner_id,current[2].owner_id] , function(err2,rows2){
                    if(err2) throw err2;
                    else{
                        var details = [];
                        if(rows2.length == 3) details = rows2;
                        if(rows2.length == 1){
                            for(var i = 0 ; i < 3 ; i++){
                                details[i] = rows2[0];
                            }
                        } 
                        else{
                            if(current[0].owner_id == current[1].owner_id){
                                details[0] = rows2[0];
                                details[1] = rows2[0];
                                details[2] = rows2[1];
                            }
                            if(current[1].owner_id == current[2].owner_id){
                                details[0] = rows2[0];
                                details[1] = rows2[1];
                                details[2] = rows2[1];   
                            }
                            if(current[0].owner_id == current[2].owner_id){
                                details[0] = rows2[0];
                                details[1] = rows2[1];
                                details[2] = rows2[0];   
                            }
                        }
                        res.render('./admin_featured.ejs' , {featured: current, details:details, old : old});
                    }
                });
            }
        });    
    },

    remove_featured: function(req,res,next){
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
                    else res.next();
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
            else res.render('./admin_add_featured.ejs',{datarows:rows});
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
                connection.query("INSERT INTO featured (equip_id,display,start_date, views, end_date) VALUES (?,?,?,?, ?)",[req.params.id,1,today,0, 0], function(err){
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
        connection.query("SELECT subcategory,brand,model,expected_price,owner_name,state     FROM all_equipment WHERE owner_id = ?" ,[req.session.user],function(err,rows){
            if (err) throw err ; 
            else res.render('./admin_my_equipment.ejs' , {datarows: rows});
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
        res.render('./admin_index.ejs', {msg:('Welcome'+req.session.name)});
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

    get_add_equipment: function(req,res){
        if(req.session.msg) {
                    msg = req.session.msg;
                    req.session.msg = '';
        }
        else msg = 'Please enter the following details';
        connection.query("SELECT DISTINCT subcategory FROM equipment_type WHERE category = ?",[cat_rows[0].category], function(err1, subcat_rows){
            if (err1) throw err1;
            else res.render('./user_add_equipment.ejs', {msg : msg, cat_rows:cat_rows, isLoggedIn : isLoggedIn(req,res), username: req.session.name});                             
        });
    },

    get_add_equipment_category: function(req,res){
        var cat_selected = req.query.category;
        var sql="SELECT DISTINCT subcategory FROM equipment_type WHERE category = ?";
        connection.query(sql, [cat_selected], function(err,result){
            if(err){res.end('error');}
            else{ 
                res.send(result);
            } 
        }); 
    },

    get_add_equipment_subcategory: function(req,res){
        var cat_selected = req.query.category;
        var subcat_selected = req.query.subcategory;
        var sql="SELECT DISTINCT brand FROM equipment_type WHERE category = ? AND subcategory= ?";
        connection.query(sql, [cat_selected, subcat_selected], function(err,result){
             if(err){res.end('error');}
            else{ 
                res.send(result);} 
        }); 
    },

    get_add_equipment_brand: function(req,res){
        var brand_selected = req.query.brand;
        var cat_selected = req.query.category;
        var subcat_selected = req.query.subcategory;
        var sql="SELECT DISTINCT model FROM equipment_type WHERE category = ? AND subcategory= ? AND brand= ?";
        connection.query(sql, [cat_selected, subcat_selected, brand_selected], function(err,result){
             if(err){res.end('error');}
            else{ 
                res.send(result);} 
        }); 
    },

    post_add_equipment: function(req, res, next){
        var name = {
                    category : req.body.category,
                    subcategory : req.body.subcategory,   
                    brand: req.body.brand,
                    model: req.body.model,
                    expected_price: req.body.expected_price,
                    year: req.body.year,
                    colour: req.body.colour,
                    description: req.body.description,
                    km: req.body.km,                 
                    available : 1,
                    type_id : 0,
                    owner_id: req.session.user,
                    city:'',
                    state:''
        };   
        connection.query("SELECT type_id FROM equipment_type WHERE category = ? AND subcategory = ? AND brand = ? AND model = ?", [name.category, name.subcategory, name.brand, name.model], function(err, rows){
            if(err) throw err;
            else { 
                name.type_id = rows[0].type_id;       
                connection.query("SELECT name, city, state FROM account WHERE id = ?", [name.owner_id], function(err,rows){
                    if (err) throw err;
                    else {
                        name.city = rows[0].city;
                        name.state = rows[0].state;

                var radicle = '';
                connection.query("SELECT id FROM all_equipment ORDER BY id ASC", function(err,rows){
                    if(err) throw err;
                    else {
                        if(rows.length) radicle = rows.slice(-1)[0].id + 1;
                        else radicle = 1;
                        
                var photo = [];
                var photoname = [];
                var resultp = [];
                var photo_name = [];
                
                photo[1] = req.files.photo1;
                photo[2] = req.files.photo2;
                photo[3] = req.files.photo3;
                photo[4] = req.files.photo4;

                for(var i = 1; i<5 ; i++){
                        photoname[i] = photo[i].name;
                        resultp[i] = photoname[i].split('.');
                        photo_name[i] = radicle+'_'+i+'.'+resultp[i].slice(-1) ;
                        photo[i].mv('images/'+photo_name[i], function(err3){           
                            if (err3) throw(err3);
                        });
                }

                var doc = [];
                var docname = [];
                var resultd = [];
                var doc_name = [];

                doc[1] = req.files.doc1;
                doc[2] = req.files.doc2;
                doc[3] = req.files.doc3;
                doc[4] = req.files.doc4;
                doc[5] = req.files.doc5;
                doc[6] = req.files.doc6;

                for(var i = 1; i<7 ; i++){
                    if(doc[i]){
                        docname[i] = doc[i].name;
                        resultd[i] = docname[i].split('.');
                        doc_name[i] = radicle+'_'+i+'.'+resultd[i].slice(-1) ;
                        doc[i].mv('docs/'+doc_name[i] , function(err3){           
                            if (err3) throw(err3);
                        });
                    }
                    else doc_name[i] = '';
                }

                var insertQuery = "INSERT INTO all_equipment ( photo1, photo2, photo3, photo4, doc1, doc2, doc3, doc4, doc5, doc6 ,type_id,state,available, category , brand, model, expected_price, year, colour, city, subcategory, description, km, owner_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                connection.query(insertQuery, [photo_name[1],photo_name[2],photo_name[3],photo_name[4],doc_name[1],doc_name[2],doc_name[3],doc_name[4],doc_name[5],doc_name[6],name.type_id, name.state, name.available, name.category,name.brand, name.model, name.expected_price, name.year, name.colour, name.city, name.subcategory, name.description,name.km,name.owner_id],function (err4, resulti){
                    if (err4) throw err4;
                    else {
                        req.session.msg = "Your equipment is added successfully...";
                        return next();
                    }
                });

                    }
                });
                    }
                }); 
            }
        });        
    }   

    
}