const path = require ('path');
const fs = require('fs');

/* const productDetail ={
    productDetail: (req, res)=>{
        res.render(path.join(__dirname, '../views/productDetail.ejs', {products:products}))
    }
} 
module.exports = productDetail;
*/

module.exports = {
    productDetail: (req,res) =>{
    let products =  JSON.parse(fs.readFileSync(path.join(__dirname,'../baseDeDatos/data_games3.json')));
    let selectedGame;
    products.forEach(game => {
        if(game.id == req.params.id){
        selectedGame = game;
        }
    });
   // console.log(selectedGame);
    res.render(path.resolve(__dirname, '../views/productDetail'), {selectedGame})

}

}