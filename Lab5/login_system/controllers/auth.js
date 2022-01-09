const credential = {
    email:"admin@gmail.com",
    password:"admin123"
}

const Login = (req,res) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
    } else {
        res.redirect('/route/login-failed');
        //res.end("Invalid Username or password");
    }
};

const Logout = (req,res) => {
    req.session.destroy(function(err){
        if (err)
        {
            console.log(err);
            res.send("Error");
        }
        else
        {
            res.render('base',{title:"Express", logout: "logout Successfully"})
        }
    });
};

module.exports = {Login, Logout};