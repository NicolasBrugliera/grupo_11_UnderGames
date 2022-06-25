const express = require('express');
const path = require('path')
const app = express();
const publicPath = path.resolve(__dirname, '../public');
//  app.use(express.static(publicPath));



//rutas
const router  = require('./routes/routeIndex');
const routeLogin = require('./routes/routeLogin');
const routeProductCart = require('./routes/routeProductCart');
const routerProductDetail  = require('./routes/routeProductDetail');
const routeRegister = require('./routes/routeRegister');
const routeUnderConstr = require('./routes/routeUnderConstr');
const routeUser = require('./routes/routeUsers');
const routeProductEdit = require('./routes/routeProductEdit');

//configuracion
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', router);
app.use('/index', router);
app.use('/productDetail', routerProductDetail);
app.use('/productCart', routeProductCart);
app.use('/login', routeLogin);
app.use('/register', routeRegister);
app.use('/under_constr', routeUnderConstr);
app.use('/userList', routeUser);
app.use('/productEdit', routeProductEdit);






app.listen(process.env.PORT || 3000, function() {
	console.log('Server Levantado en Port 3000');
})



