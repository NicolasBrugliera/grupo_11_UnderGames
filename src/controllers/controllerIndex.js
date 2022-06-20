const path = require ('path');


const home ={
    home: (req, res)=>{
        res.render(path.join(__dirname, '../views/index.ejs'))
    }
}




module.exports = home;