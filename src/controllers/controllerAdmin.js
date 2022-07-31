const path = require('path')
const fs = require('fs')
const { validationResult } = require('express-validator')


const controllerAdmin = {

    adminList: (req, res) => {
        let data_games3 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games3.json')))
        res.render(path.join(__dirname, '../views/admin/admin'), {data_games3})

    }, 
    create:(req, res) => {
        let data_games3 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games3.json')))
        res.render(path.join(__dirname, '../views/admin/create'),  {data_games3} )

    },
    save: (req,res) =>{

        const resultValidations = validationResult(req)
                if(resultValidations.errors.length > 0){
                    return  res.render(path.join(__dirname, '../views/admin/create'), {
                    errors: resultValidations.mapped(),
                    oldData: req.body
                    })
                    
                }

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
            
    }, 

    edit: (req, res)=>{
        let data_games3 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games3.json')))
        const gameId = req.params.id
        gameToEdit = data_games3.find( element => element.id == gameId)
        res.render(path.join(__dirname, '../views/admin/edit'), {gameToEdit})
        
        
    },

    update: (req,res)=>{

/*       const resultValidations = validationResult(req)
        if(resultValidations.errors.length > 0){
            return  res.render(path.join(__dirname, '../views/admin/create'), {
            errors: resultValidations.mapped(),
            oldData: req.body
            })
            
        } */
 

        let data_games3 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games3.json')))
        req.body.id = req.params.id 

        // Si no se actualiza una de la imágenes en el formulario de modificación, continúa mostrándose (oldImage) el anterior. En la vista figura en formulario oculto (hidden)
        // si en el body.img_1 llega un archivo desde multer (req.files) entonces que suba el que viene en esa posición, sino que siga mostrando lo que figura (oldImage)

        req.body.img_1 = req.files.img_1 ? req.files.img_1[0].filename : req.body.oldImage1
        req.body.img_2 = req.files.img_2 ? req.files.img_2[0].filename : req.body.oldImage2
        req.body.img_3 = req.files.img_3 ? req.files.img_3[0].filename : req.body.oldImage3
        req.body.img_4 = req.files.img_4 ? req.files.img_4[0].filename : req.body.oldImage4 
        req.body.img_5 = req.files.img_5 ? req.files.img_5[0].filename : req.body.oldImage5  
        

        let gamesUpdate = data_games3.map( games => {
            if(games.id == req.body.id){
                return games = req.body
            }
            return games
        })

       

        let gameActualizar = JSON.stringify(gamesUpdate, null, 2)
        fs.writeFileSync(path.join(__dirname,'../baseDeDatos/data_games3.json'), gameActualizar);
        res.redirect('/admin')
    }, 

    viewDestroy:(req,res)=>{
        let data_games3 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games3.json')))
        const gameId = req.params.id
        const gameToDelete = data_games3.find( element => element.id == gameId)
        res.render(path.join(__dirname, '../views/admin/delete'), {gameToDelete})

    },

    destroy:(req, res)=> {
        let data_games3 = JSON.parse(fs.readFileSync(path.join(__dirname, '../baseDeDatos/data_games3.json')))
        const gameDeleteID = req.params.id;
        const gamesFinal = data_games3.filter(game => game.id != gameDeleteID) // genera body de ids que existen excepto el elegido
        const gamesToSave = JSON.stringify(gamesFinal, null, 2) // Guardo en el Json todas las motos menos la que filtré que es la elegida para borrar. 
        fs.writeFileSync(path.join(__dirname, '../baseDeDatos/data_games3.json'), gamesToSave) 

        res.redirect('/admin')


    }

}


module.exports = controllerAdmin