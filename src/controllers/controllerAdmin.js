const path = require('path')
const fs = require('fs')


const controllerAdmin = {

    adminList: (req, res) => {

        let data_games3 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games3.json')))
        res.render(path.join(__dirname, '../views/admin/admin'), {data_games3})

    }, 
    create:(req, res) => {
        let data_games3 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games3.json')))
        res.render(path.join(__dirname, '../views/admin/create'), /* {data_games3} */)

    },
    save: (req,res) =>{
        let data_games3 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games3.json')))
        let lastGame = data_games3.pop();
        data_games3.push(lastGame);
        
        let newGame = {
            id: Number(lastGame.id) + 1,
            title: req.body.title, 
            one_word_descr: req.body.one_word_descr,
            short_descr: req.body.short_descr,
            long_descr: req.body.long_descr,
            game_group: req.body.game_group,
            category: req.body.category,
            creator: req.body.creator,
            original_price: req.body.original_price,
            price_w_discount: req.body.price_w_discount,
            discount: req.body.discount,
            img_1: req.files.img_1[0].filename,
            img_2: req.files.img_2[0].filename,
            img_3: req.files.img_3[0].filename,
            img_4: req.files.img_4[0].filename,
            img_5: req.files.img_5[0].filename,
            video_1: req.body.video_1,
            miniatura: req.body.miniatura,
            launch_date:req.body.launch_date,
            platform: req.body.platform,
            os_min: req.body.os_min,            
            os_rec: req.body.os_rec,
            processor_min:req.body.processor_min,
            processor_rec:req.body.processor_rec,
            storage_min: req.body.storage_min,
            storage_rec: req.body.storage_rec,
            graphics_min: req.body.graphics_min,
            graphics_rec: req.body.graphics_rec,
            age: req.body.age        
            
        }
        
        data_games3.push(newGame);
        let newGameSave = JSON.stringify(data_games3,null,2);
        fs.writeFileSync(path.join(__dirname,'../baseDeDatos/data_games3.json'), newGameSave);
        res.redirect('/admin');
      
       console.log(req.files) 
       console.log(req.body) 
    }

}


module.exports = controllerAdmin