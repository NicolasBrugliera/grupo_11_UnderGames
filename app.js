let express = require('express');
const path = require('path')
const app = express();
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, function() {
	console.log('Server Levantado en Port 3000');
})

app.get('/under_constr', (req, res)=>{
		res.sendFile(path.join(__dirname, '/views/under_constr.html'));
	});

app.get('/', (req, res)=>{
		res.sendFile(path.join(__dirname, '/views/index.html'));
	}
	)

	app.get('/login', (req, res)=>{
		res.sendFile(path.join(__dirname, '/views/login.html'));
	}
	)	

	app.get('/productCart', (req, res)=>{
		res.sendFile(path.join(__dirname, '/views/productCart.html'));
	}
	)	

	app.get('/productDetail', (req, res)=>{
		res.sendFile(path.join(__dirname, '/views/productDetail.html'));
	}
	)	
	
	app.get('/register', (req, res)=>{
		res.sendFile(path.join(__dirname, '/views/register.html'));
	}
	)	