const path = require ('path');
const fs = require('fs');
const db = require('../database/models');



module.exports = {
    'productDetail': (req, res) => {
        let id_game = req.params.id;
        db.Game.findByPk(id_game, {
            include: ['category', 'game_group', 'platform','graphics_min', 'graphics_rec', 
            'processor_min', 'processor_rec', 'os_min', 'os_rec', 'storage_min', 'storage_rec', 
            'creator']})
            .then(id_game => {
                selectedGame = id_game
                res.render(path.join(__dirname, '../views/productDetail'),{selectedGame})
            });
        }

}