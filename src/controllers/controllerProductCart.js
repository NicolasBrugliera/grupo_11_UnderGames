const path = require ('path');


const productCart ={
    productCart: (req, res)=>{
        res.render(path.join(__dirname, '../views/productCart.ejs'))
    }
}




module.exports = productCart;