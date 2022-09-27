const express = require('express');
const path = require('path')
const app = express();
const methodOverride = require('method-override');

//para session cookies y validar usuario loggeado
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const publicPath = path.resolve(__dirname, '../public');
//  app.use(express.static(publicPath));



//configuracion
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));//define la ubicacion de la carpeta vistas
app.use(methodOverride('_method'));


//para session cookies y validar usuario loggeado
app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.urlencoded({ extended: false }));




//rutas
const routeIndex  = require('./routes/routeIndex');
//const routeLogin = require('./routes/routeLogin');
const routeProductCart = require('./routes/routeProductCart');
const routerProductDetail  = require('./routes/routeProductDetail');
//const routeRegister = require('./routes/routeRegister');
const routeUnderConstr = require('./routes/routeUnderConstr');
const routeUsers = require('./routes/routeUsers');
const routeAdmin = require('./routes/routeAdmin')
const routeProductEdit = require('./routes/routeProductEdit');
//const routeProducts = require('./routes/routeProducts');
const routerProductList  = require('./routes/routeProductList');
const apiRouteUsers = require('./routes/apiRouteUsers') ;
const apiRouteProducts = require('./routes/apiRouteProducts') ;


app.listen(process.env.PORT || 3005, function() {
	console.log('Server Levantado en Port 3005');
})

app.use(routeIndex);
app.use('/productDetail',routerProductDetail);
app.use('/productList',routerProductList);
app.use('/productCart', routeProductCart);
//app.use('/login', routeLogin);
//app.use('/register', routeRegister);
app.use('/under_constr', routeUnderConstr);
//app.use('/userList', routeUser);
app.use('/users', routeUsers);

app.use('/admin', routeAdmin)
app.use('/productEdit', routeProductEdit);
//app.use('/products', routeProducts);

app.use("/api/users", apiRouteUsers);
app.use("/api/products", apiRouteProducts);









