exports.index = function (req, res) {
    if (!req.user) {
        res.redirect('/login')
    }
};