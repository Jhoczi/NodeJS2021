var express = require('express');
var router = express.Router();
var authController = require('./controllers/auth');
var dashboardController = require('./controllers/dashboard');

// login user
router.post('/login',authController.Login);
router.get('/login-failed/',dashboardController.Home);
// route for dashboard
router.get('/dashboard',dashboardController.Dashboard);

// route for logout
router.get('/logout', authController.Logout);


module.exports = router;