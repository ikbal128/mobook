module.exports = {
    getHomePage: (req, res)=> {
        res.render('admin/index',{title: "Dashboard"})
    }
}