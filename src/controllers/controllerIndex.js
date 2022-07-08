const path = require('path');
const fs = require('fs');

let archivo = path.join(__dirname,'../baseDeDatos/data_games3.json');
//console.log(archivo);
let products = JSON.parse(fs.readFileSync(archivo));
//console.log(products);

let creators = JSON.parse(fs.readFileSync(path.join(__dirname,'../baseDeDatos/creators.json')));

module.exports = {
    index: function(req,res){
        res.render(path.join(__dirname, '../views/index'),{products, creators});
    }
}
