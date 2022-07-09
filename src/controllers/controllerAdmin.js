const path = require('path')
const fs = require('fs')


const controllerAdmin = {

    adminList: (req, res) => {

        let data_games2 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games2.json')))
        res.render(path.join(__dirname, '../views/admin/admin'), {data_games2})

    }, 
    create:(req, res) => {
        let data_games2 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games2.json')))
        res.render(path.join(__dirname, '../views/admin/create'), /* {data_games2} */)

    },
    save: (req,res) =>{
        let data_games2 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games2.json')))
        let lastGame = data_games2.pop();
        data_games2.push(lastGame);
        
        let newGame = {
            id: lastGame.id + 1,
            title: req.body.title,
            one_word_descr: req.body.one_word_descr,
            short_descr: req.body.short_descr,
            long_descr: req.body.long_descr,
            game_group: req.body.game_group,
            category:req.body.category,
            creator: req.body.creator,
            original_price: req.body.original_price,
            price_w_discount: req.body.price_w_discount,
            discount: req.body.discount,
            img_1: req.file.filename
        }

        data_games2.push(newGame);
        let newGameSave = JSON.stringify(data_games2,null,2);
        fs.writeFileSync(path.join(dirname,'../baseDeDatos/data_games2.json'), newGameSave);
        res.redirect('/admin');
        console.log(newGame);
    }

}


module.exports = controllerAdmin