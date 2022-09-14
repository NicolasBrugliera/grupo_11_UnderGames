const path = require('path')
const fs = require('fs')
const { validationResult } = require('express-validator')
const db = require('../database/models');
const { title } = require('process');




const controllerAdmin = {

    adminList: (req, res) => {
        db.Game.findAll({
            include: [{association: "category", association: "game_group", association: "platform",
            association: "graphics_min", association: "graphics_rec", 
            association: "processor_min", association: "processor_rec",
            association: "os_min", association: "os_rec",
            association: "storage_min", association: "storage_rec", 
            association: 'creator'}]
                    })
            .then(function(games){
                res.render(path.join(__dirname, '../views/admin/admin'),{games:games})
            })
        

    }, 
    create:(req, res) => {
        let promGames = db.Game.findAll();
        let promCreators = db.Creator.findAll();
        let promGameGroups = db.Game_group.findAll();
        let promCategories = db.Category.findAll();
        let promPlatforms = db.Platform.findAll();
        let promOsMin = db.Os_min.findAll();
        let promOsRec = db.Os_rec.findAll();
        let promProcessorMin = db.Processor_min.findAll();
        let promProcessorRec = db.Processor_rec.findAll();
        let promStorageMin = db.Storage_min.findAll();
        let promStorageRec = db.Storage_rec.findAll();
        let promGraphicsMin = db.Graphics_min.findAll();
        let promGraphicsRec = db.Graphics_rec.findAll();

        Promise
        .all([promGames, promCreators, promGameGroups, promCategories, promPlatforms, promOsMin, promOsRec, 
            promProcessorMin, promProcessorRec, promStorageMin, promStorageRec, promGraphicsMin, promGraphicsRec])
        .then(([allGames, allCreators, allGameGroups, allCategories, allPlatforms, allOsmin, allOsrec, 
            allProcessormin, allProcessorec,  allStoragemin, allStoragerec, allGraphicsmin, allGraphicsrec]) => {
    
             
                return res.render(path.join(__dirname, '../views/admin/create'),
            {allGames, allCreators, allGameGroups, 
                allCategories, allPlatforms, allOsmin, allOsrec, allProcessormin, 
                allProcessorec, allStoragemin, allStoragerec, allGraphicsmin, allGraphicsrec}
            )})
        .catch(error => res.send(error))

    },
    save: (req,res) =>{
        const resultValidations = validationResult(req)
        
                if(resultValidations.errors.length > 0){

                    let promGames = db.Game.findAll();
                    let promCreators = db.Creator.findAll();
                    let promGameGroups = db.Game_group.findAll();
                    let promCategories = db.Category.findAll();
                    let promPlatforms = db.Platform.findAll();
                    let promOsMin = db.Os_min.findAll();
                    let promOsRec = db.Os_rec.findAll();
                    let promProcessorMin = db.Processor_min.findAll();
                    let promProcessorRec = db.Processor_rec.findAll();
                    let promStorageMin = db.Storage_min.findAll();
                    let promStorageRec = db.Storage_rec.findAll();
                    let promGraphicsMin = db.Graphics_min.findAll();
                    let promGraphicsRec = db.Graphics_rec.findAll();

                    Promise
                    .all([promGames, promCreators, promGameGroups, promCategories, promPlatforms, promOsMin, promOsRec, 
                        promProcessorMin, promProcessorRec, promStorageMin, promStorageRec, promGraphicsMin, promGraphicsRec])
                    .then(([allGames, allCreators, allGameGroups, allCategories, allPlatforms, allOsmin, allOsrec, 
                        allProcessormin, allProcessorec,  allStoragemin, allStoragerec, allGraphicsmin, allGraphicsrec]) => {

                
            return res.render(path.join(__dirname, '../views/admin/create'),{

                    errors: resultValidations.mapped(),  
                    allGames, allCreators, allGameGroups, 
                    allCategories, allPlatforms, allOsmin, allOsrec, allProcessormin, 
                    allProcessorec, allStoragemin, allStoragerec, allGraphicsmin, allGraphicsrec,
                    
                    oldData: req.body

                    })
                })
                .catch(error => res.send(error))
                } else {

                //CONVIERTE CUALQUIER URL DE YOUTUBE Y EXTRAE EL VIDEO ID (CODIGO DE VIDEO) y los guarda en video_1 y miniatura
                    
                    url = req.body.video_1
                    url= url.split(/(shorts\/|vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                    id = (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
                    video_1 = 'https://www.youtube.com/embed/'+id 
                    miniatura = 'https://img.youtube.com/vi/'+id+'/mqdefault.jpg'

                    
        db.Game
            .create({

                title: req.body.title, 
                one_word_descr: req.body.one_word_descr,
                short_descr: req.body.short_descr,
                long_descr: req.body.long_descr,
                id_game_group: req.body.game_group,
                id_category: req.body.category,
                //id_creator: req.body.creator,
                original_price: req.body.original_price,
                price_w_discount: req.body.price_w_discount,
                discount: req.body.discount,
                img_1: req.files.img_1[0].filename,
                img_2: req.files.img_2[0].filename,
                img_3: req.files.img_3[0].filename,
                img_4: req.files.img_4[0].filename,
                img_5: req.files.img_5[0].filename, 
                video_1: 'https://www.youtube.com/embed/'+id, 
                miniatura : 'https://img.youtube.com/vi/'+id+'/mqdefault.jpg',
                launch_date:req.body.launch_date,
                id_platforms: req.body.platform,
                id_os_min: req.body.os_min,            
                id_os_rec: req.body.os_rec,
                id_processor_min:req.body.processor_min,
                id_processor_rec:req.body.processor_rec,
                id_storage_min: req.body.storage_min,
                id_storage_rec: req.body.storage_rec,
                id_graphics_min: req.body.graphics_min,
                id_graphics_rec: req.body.graphics_rec,
                age: req.body.age
                })
              
                .then(()=> {
               
              
                 return res.redirect('/admin')})            
                .catch(error => res.send(error))
            }  

    }, 

    

    edit: (req, res)=>{
        let id_game = req.params.id;
        let promGames = db.Game.findByPk(id_game, {include: ['category', 'game_group', 'platform','graphics_min', 'graphics_rec', 'processor_min', 'processor_rec', 'os_min', 'os_rec', 'storage_min', 'storage_rec', 'creator'] });
        let promCategories = db.Category.findAll();
        let promGameGroups = db.Game_group.findAll();
        let promPlatforms = db.Platform.findAll();
        let promGraphicsMin = db.Graphics_min.findAll();
        let promGraphicsRec = db.Graphics_rec.findAll();
        let promProcessorMin = db.Processor_min.findAll();
        let promProcessorRec = db.Processor_rec.findAll();
        let promOsMin = db.Os_min.findAll();
        let promOsRec = db.Os_rec.findAll();
        let promStorageMin = db.Storage_min.findAll();
        let promStorageRec = db.Storage_rec.findAll();
        let promCreators = db.Creator.findAll();
       
        
        Promise
        .all([promGames, promCategories, promGameGroups, promPlatforms, 
            promGraphicsMin, promGraphicsRec, promProcessorMin, promProcessorRec,
            promOsMin, promOsRec, promStorageMin, promStorageRec, promCreators
           
        ]) 

        .then(([gameToEdit, allCategories, allGameGroups, allPlatforms, 
            allGraphicsmin, allGraphicsrec, allProcessormin, allProcessorec,
            allOsmin, allOsrec, allStoragemin, allStoragerec, allCreators
           
        ]) => { 
          return res.render(path.resolve(__dirname, '..', 'views', 'admin' ,'edit'), 
            {gameToEdit, allCategories, allGameGroups, allPlatforms,
                allGraphicsmin, allGraphicsrec, allProcessormin, allProcessorec,
                allOsmin, allOsrec, allStoragemin, allStoragerec, allCreators
              
            })
            }) 
            
        .catch(error => res.send(error))
    
    },

    update: (req,res)=>{

        //CONVIERTE CUALQUIER URL DE YOUTUBE Y EXTRAE EL VIDEO ID (CODIGO DE VIDEO) y los guarda en sendos video_1 y miniatura
        url = req.body.video_1
        url= url.split(/(shorts\/|vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        id = (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
        video_1 = 'https://www.youtube.com/embed/'+id 
        miniatura = 'https://img.youtube.com/vi/'+id+'/mqdefault.jpg'
 

        let id_game = req.params.id;
        db.Game
        .update(
            {
                title: req.body.title, 
                one_word_descr: req.body.one_word_descr,
                short_descr: req.body.short_descr,
                long_descr: req.body.long_descr,
                id_game_group: req.body.game_group,
                id_category: req.body.category,
                id_creator: req.body.creator,
                original_price: req.body.original_price,
                price_w_discount: req.body.price_w_discount,
                discount: req.body.discount,
                img_1: req.body.img_1 = req.files.img_1 ? req.files.img_1[0].filename : req.body.oldImage1,
                img_2: req.body.img_2 = req.files.img_2 ? req.files.img_2[0].filename : req.body.oldImage2,
                img_3: req.body.img_3 = req.files.img_3 ? req.files.img_3[0].filename : req.body.oldImage3,
                img_4: req.body.img_4 = req.files.img_4 ? req.files.img_4[0].filename : req.body.oldImage4,
                img_5: req.body.img_5 = req.files.img_5 ? req.files.img_5[0].filename : req.body.oldImage5, 
                video_1: 'https://www.youtube.com/embed/'+id, 
                miniatura : 'https://img.youtube.com/vi/'+id+'/mqdefault.jpg',
                launch_date:req.body.launch_date,
                id_platforms: req.body.platform,
                id_os_min: req.body.os_min,            
                id_os_rec: req.body.os_rec,
                id_processor_min:req.body.processor_min,
                id_processor_rec:req.body.processor_rec,
                id_storage_min: req.body.storage_min,
                id_storage_rec: req.body.storage_rec,
                id_graphics_min: req.body.graphics_min,
                id_graphics_rec: req.body.graphics_rec,
                age: req.body.age
            },
            {
                where: {id_game: id_game}
            },
           
            )

       .then(()=> {
            return res.redirect('/admin')})            
        .catch(error => res.send(error))

    }, 

    viewDestroy:(req,res)=>{
        let id_game = req.params.id;
        
        db.Game
        .findByPk(id_game)
        .then(gameToDelete => {
            res.render(path.join(__dirname, '../views/admin/delete'), {gameToDelete})})
        .catch(error => res.send(error))


    },

    destroy:(req, res)=> {
        let gameId = req.params.id;
        db.Game
        .destroy({where: {id_game: gameId}, force: true}) 
        .then(()=>{
            return res.redirect('/admin')})
        .catch(error => res.send(error)) 
       
    }

}

module.exports = controllerAdmin