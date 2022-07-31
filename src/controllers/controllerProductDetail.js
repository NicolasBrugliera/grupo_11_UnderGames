const path = require ('path');
const fs = require('fs');


module.exports = {
    productDetail: (req,res) =>{
        let products =  JSON.parse(fs.readFileSync(path.join(__dirname,'../baseDeDatos/data_games3.json')));
        let selectedGame;
        products.forEach(game => {
            if(game.id == req.params.id){
            selectedGame = game;
            }
        });
   
    res.render(path.resolve(__dirname, '../views/productDetail/'), {selectedGame})

    }

}