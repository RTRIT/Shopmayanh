const Product = require('../models/Product')
const Buy = require('../models/Buy')

class AdminController{
    showUser(req, res){
        Buy.find({}).lean()
            .then(user => res.render('admin/userMag', {user}))
    }
}

module.exports = new AdminController