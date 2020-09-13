
const isAdmin = (req, res, next) => {
    if(req.session.userLogin.role == 1){
        next();
    }else{
        res.redirect('/dashboard/home');
    }
}

module.exports = isAdmin