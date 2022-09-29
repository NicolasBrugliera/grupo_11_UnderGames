const path = require('path');
const fs = require('fs');
const db = require('../database/models');
//const sequelize = db.sequelize;

// levantando los datos de la base de datos

module.exports = {
    productList: function(req,res){

        db.Game.findAll({ include: { all: true, nested: true }
})
        
                

            /* include: [{association: "category", association: "game_group", association: "platform",
            association: "graphics_min", association: "graphics_rec", 
            association: "processor_min", association: "processor_rec",
            association: "os_min", association: "os_rec",
            association: "storage_min", association: "storage_rec", 
            association: 'creator'}], */
                    
            .then(function(games){
                res.render(path.join(__dirname, '../views/productList'),{products:games})
            })
    
    }
    }





/* const path = require('path');
const fs = require('fs');



//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

module.exports = {
    productList: function(req,res){
        let products = JSON.parse(fs.readFileSync(path.join(__dirname,'../baseDeDatos/data_games3.json')));
        res.render(path.join(__dirname, '../views/productList'),{products});
    }
} */

