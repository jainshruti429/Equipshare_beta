// app/routes.js

// all the routes/request that are required in the server side.
// all request are handled here.

//load all the things needed.
var mysql = require('mysql');
var dbconfig = require('./config/database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

var express  = require('express');
var app = express();
var path = require('path');
var fileUpload = require('express-fileupload');
app.use(express.static(path.join(__dirname,'/docs')));
app.use(express.static(path.join(__dirname,'/images')));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/")));
app.use(fileUpload());

// import functions from other files.
var general_functions = require('./app/general_functions') //common functions
var admin_functions = require('./app/admin_functions'); //admin side functions
var user_functions = require('./app/user_functions'); 
var csv = require('./app/csv');


// =======================================================================================
// export all the routes
module.exports = function(app, passport) {

// =======================================================================================
// =========================== WITHOUT AUTHORISATION FUNCTIONS ====================================== 
// =======================================================================================

    //these functions do not require user to be logged in
    //HOME PAGE of website.... 
    // app.get('/', function(req,res){
    //     res.sendFile(__dirname+'/views/something.html');  
    // });
    app.get('/', general_functions.index);
    app.post('/featured:id',general_functions.featured);
    app.get('/search_category', general_functions.search_category);
    app.post('/search',general_functions.search);
    app.post('/view:id', general_functions.view);
    app.post('/email', general_functions.email, general_functions.index);
    app.get('/csv', function(req,res){
        res.render("./csv.ejs", {msg: ''});
    });
    app.post('/csv', csv.csv);
    
// =======================================================================================
// =========================== USER FUNCTIONS ================================================== 
// =======================================================================================
    app.get('/login:id', general_functions.login);
    
    app.post('/user_login:id', function(req, res, next){
            //call the local-login in ../config/passport.js
            passport.authenticate('local-login', function (err, user, info) {
                // info is json given by passport.aunthicate
                //this function is called when LocalStrategy returns done function with parameters
                if(err) return res.render('./user_login.ejs', {msg : 'Please Try Again!', login_para : 1, id:req.params.id});    
                //if username or password doesn't match
                if(!user) return res.render('./user_login.ejs', {msg: 'Please Try Again!', login_para : 1, id:req.params.id});  
                //this is when login is successful
                req.logIn(user, function(err) {
                    if (err) return res.render('./user_login.ejs', {msg : 'Please Try Again!', login_para : 1, id:req.params.id}); 
                    else  return next();
                });   
            })(req,res,next);
        }, function(req,res,next){
            if(req.params.id != 0) return next();
            else return general_functions.index(req,res);
        }, general_functions.view);

    app.post('/user_signup:id', function(req, res, next){
            passport.authenticate('local-signup', function (err, user, info) {
                //this function is called when LocalStrategy returns done function with parameters
                if(err) return res.render('./user_login.ejs', {msg : 'Please Try Again!', id:req.params.id});    
                //if username or password doesn't match
                if(!user) return res.render('./user_signup.ejs', {msg:info.message});
                if (req.body.password != req.body.retype_password) return res.render('./user_signup.ejs',{msg:'passwords did not match', id:req.params.id});
                //if (!req.body.agree) return res.render('./user_signup.ejs',{msg:'You need to agree to TnC'});          
                //this is when signup is successful
                else return res.render('./user_login.ejs',{msg:'Signup successful! Login to continue', login_para:1, id:req.params.id });
            })(req,res,next);
        });

 // all are checking that the user is first logged in and then that he is of the right category that the request belong to.
    app.get('/user_request:id&:owner_id', general_functions.isLoggedInfunc, user_functions.request_this);
    app.get('/user_reset_password', general_functions.isLoggedInfunc, user_functions.get_reset_password);
    app.post('/user_reset_password', general_functions.isLoggedInfunc, user_functions.post_reset_password, user_functions.get_reset_password);
    app.get('/user_update_equipment:id',general_functions.isLoggedInfunc, user_functions.get_update_this_equipment);
    app.post('/user_update_equipment:id', general_functions.isLoggedInfunc, user_functions.post_update_this_equipment, general_functions.view);
    app.get('/user_my_equipment', general_functions.isLoggedInfunc,user_functions.my_equipment);
    app.get('/user_view_equipment', general_functions.isLoggedInfunc, user_functions.view_equipment);
    app.get('/user_add_equipment',general_functions.isLoggedInfunc, user_functions.check_profile, user_functions.get_add_equipment);
    app.get('/user_add_equipment_category', general_functions.isLoggedInfunc, user_functions.get_add_equipment_category);
    app.get('/user_add_equipment_subcategory', general_functions.isLoggedInfunc, user_functions.get_add_equipment_subcategory);
    app.get('/user_add_equipment_brand', general_functions.isLoggedInfunc, user_functions.get_add_equipment_brand);
    app.post('/user_add_equipment', general_functions.isLoggedInfunc, user_functions.post_add_equipment, user_functions.get_add_equipment);
    app.get('/user_update_profile',general_functions.isLoggedInfunc, user_functions.get_update_profile);
    app.post('/user_update_profile', general_functions.isLoggedInfunc, user_functions.post_update_profile);
    app.get('/user_logout',general_functions.isLoggedInfunc, general_functions.logoutfunc, general_functions.index);
    

// =======================================================================================
// =========================== ADMIN FUNCTIONS ====================================== 
// =======================================================================================

    app.get('/admin_login',function(req, res) {
        res.render('./admin_login.ejs', {msg :"Please login to continue"});
    });

    app.post('/admin_login', function(req, res, next){
         //call the local-login in ../config/passport.js
        passport.authenticate('local-admin_login', function (err, user, info) {
            // info is json given by passport.aunthicate
            //this function is called when LocalStrategy returns done function with parameters
            if(err) return res.render('./admin_login.ejs', {msg : 'Please Try Again!'});;    
            //if username or password doesn't match
            if(!user) return res.render('./user_login.ejs', {msg: 'Please Try Again!', login_para : 1, id:0});  
            //this is when login is successful
            req.logIn(user, function(err) {
                if (err) return next(err); 
                else return res.render('./admin_index.ejs', {msg:('Welcome '+req.session.name), username:req.session.name});
            });   
        })(req,res,next);
    });

 // all are checking that the user is first logged in and then that he is of the right category that the request belong to.
    app.get('/admin', general_functions.isLoggedInfunc, admin_access, function(req,res){
        res.render('./admin_index.ejs', {msg:('Welcome '+req.session.name), username:req.session.name});e
    });
    app.get('/admin_inquiry', general_functions.isLoggedInfunc, admin_access, admin_functions.inquiry);
    app.get('/admin_resolved:sno', general_functions.isLoggedInfunc, admin_access, admin_functions.resolved, admin_functions.inquiry);
    app.post('/admin_comment:sno', general_functions.isLoggedInfunc, admin_access, admin_functions.comment, admin_functions.inquiry);
    app.get('/admin_featured', general_functions.isLoggedInfunc, admin_access, admin_functions.featured_equip, admin_functions.feat_data, admin_functions.featured);
    app.get('/admin_view_details:id', general_functions.isLoggedInfunc,admin_access, user_functions.request_this);
    app.get('/admin_remove_featured:id',general_functions.isLoggedInfunc,admin_access,admin_functions.remove_featured,admin_functions.featured_equip, admin_functions.feat_data, admin_functions.featured);
    app.get('/admin_add_featured',general_functions.isLoggedInfunc,admin_access,admin_functions.featured_equip, admin_functions.feat_data, admin_functions.available, admin_functions.get_add_featured);    
    app.post('/admin_add_featured:id',general_functions.isLoggedInfunc,admin_access, admin_functions.post_add_featured, admin_functions.featured_equip, admin_functions.feat_data, function(req,res,next){
        connection.query("SELECT equip_id FROM featured WHERE display = 1", function(err,rows){
            if(err) throw err;
            else if(rows.length == 3) admin_functions.featured(req,res);
            else next();
        });
    },admin_functions.available, admin_functions.get_add_featured);
    app.get('/admin_view_equipment', general_functions.isLoggedInfunc,admin_access, admin_functions.available, admin_functions.view_equipment); 
    app.get('/admin_view_all_equipments', general_functions.isLoggedInfunc, admin_access, admin_functions.view_all_equipments);
    app.get('/admin_my_equipment', general_functions.isLoggedInfunc,admin_access,admin_functions.my_equipment);    
    
    app.get('/admin_add_new_admin', general_functions.isLoggedInfunc, admin_access, admin_functions.get_add_new_admin);
    app.post('/admin_add_new_admin', general_functions.isLoggedInfunc, admin_access, admin_functions.post_add_new_admin);
    app.get('/admin_homepage', general_functions.isLoggedInfunc, admin_access, admin_functions.home);
    app.get("/admin_add_equipment_type",general_functions.isLoggedInfunc, admin_access,admin_functions.get_add_equipment_type);
	app.post("/admin_add_equipment_type",general_functions.isLoggedInfunc, admin_access, admin_functions.post_add_equipment_type);
    app.get("/admin_unavailable:id", general_functions.isLoggedInfunc, admin_access,admin_functions.unavailable);
    app.get('/admin_views:equip_id', general_functions.isLoggedInfunc,admin_access, admin_functions.views);
    app.get('/admin_requests:equip_id', general_functions.isLoggedInfunc,admin_access, admin_functions.requests);
    app.get('/admin_reset_password', general_functions.isLoggedInfunc,admin_access, admin_functions.get_reset_password);
    app.post('/admin_reset_password', general_functions.isLoggedInfunc,admin_access, admin_functions.post_reset_password);
    app.get('/admin_update_equipment:id',general_functions.isLoggedInfunc,admin_access, admin_functions.get_update_this_equipment);
    app.post('/admin_update_equipment:id', general_functions.isLoggedInfunc,admin_access, admin_functions.post_update_this_equipment);
    app.get('/admin_add_equipment',general_functions.isLoggedInfunc,admin_access, admin_functions.get_add_equipment);
    app.post('/admin_add_equipment', general_functions.isLoggedInfunc,admin_access, admin_functions.post_add_equipment);
    app.get('/admin_update_profile',general_functions.isLoggedInfunc,admin_access, admin_functions.get_update_profile);
    app.post('/admin_update_profile', general_functions.isLoggedInfunc,admin_access, admin_functions.post_update_profile);
    
    app.get('/admin_user_view', general_functions.isLoggedInfunc, admin_access, general_functions.index);
    app.get('/admin_logout',general_functions.isLoggedInfunc,admin_access, general_functions.logoutfunc);
};

//__________________________________
//  logged in person category chart |
//     user     ==  1               |
//     admin    ==  0               |
//__________________________________|

// check if the the category of the client is admin i.e. 0
var admin_access = function access(req,res,next){
    if(req.session.category==0) return next();
    return res.render("error.ejs");
}


