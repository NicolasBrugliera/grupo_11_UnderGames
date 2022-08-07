const path = require ('path');
const fs = require('fs')

const productCart ={
    productCart: (req, res)=>{
        let data_games3 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games3.json')))
        res.render(path.join(__dirname, '../views/productCart.ejs'),{data_games3})
    }
}




module.exports = productCart;