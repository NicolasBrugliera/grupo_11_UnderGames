const path = require('path');
const fs = require('fs');


let archivo = path.join(__dirname,'../baseDeDatos/data_games2.json');
//console.log(archivo);

let products = JSON.parse(fs.readFileSync(archivo));
//console.log(products);


//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

module.exports = {
    productList: function(req,res){
        res.render(path.join(__dirname, '../views/productList'),{products});
    }
}

