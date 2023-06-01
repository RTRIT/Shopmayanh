const homeRoute = require('./home')
const productRoute = require('./product')
const cartRoute = require('./cart')
const orderRoute = require('./order')
const paymentRoute = require('./payment')
const userRoute = require('./user')
const adminRoute = require('./admin')
const siteRoute = require('./site')

function route(app){

    app.use('/', homeRoute)
    
    app.use('/product', productRoute)

    app.use('/cart', cartRoute)

    app.use('/payment', paymentRoute)

    app.use('/order', orderRoute)

    app.use('/admin', adminRoute)

    app.use('/user', userRoute)
}

module.exports = route