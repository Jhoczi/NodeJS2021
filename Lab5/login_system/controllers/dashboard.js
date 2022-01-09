const Dashboard = (req,res) => {
    if (req.session.user)
    {
        res.render('dashboard',{user: req.session.user})
    }
    else
    {
        res.send("Unauthorized user");
    }
};

const Home = (req,res) => {
    res.render('login-failed');
}
module.exports = {Dashboard,Home};