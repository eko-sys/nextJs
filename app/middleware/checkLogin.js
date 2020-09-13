
const checkLogin = (req, res, next) => {
    !req.session.userLogin ? res.redirect('/auth/login') : null
    next()
}

module.exports = checkLogin