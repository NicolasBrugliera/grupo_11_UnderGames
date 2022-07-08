const path = require('path');
const fs = require('fs');



//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

module.exports = {
    productList: function(req,res){
        let products = JSON.parse(fs.readFileSync(path.join(__dirname,'../baseDeDatos/data_games3.json')));
        res.render(path.join(__dirname, '../views/productList'),{products});
    }
}

