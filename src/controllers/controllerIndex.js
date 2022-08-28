const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Op = require('sequelize');


module.exports = {
    index: function(req,res){
        let promCreators = db.Creator.findAll();
        let promGames = db.Game.findAll();

        Promise
        .all([promCreators, promGames])
        .then(([allCreators, allGames]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'index'), {creators:allCreators, products:allGames})})
        .catch(error => res.send(error))
    }
} 


/* let archivo = path.join(__dirname,'../baseDeDatos/data_games3.json');
//console.log(archivo);
let products = JSON.parse(fs.readFileSync(archivo));
//console.log(products);

let creators = JSON.parse(fs.readFileSync(path.join(__dirname,'../baseDeDatos/creators.json')));

module.exports = {
    index: function(req,res){
        res.render(path.join(__dirname, '../views/index'),{products, creators});
    }
}
 */