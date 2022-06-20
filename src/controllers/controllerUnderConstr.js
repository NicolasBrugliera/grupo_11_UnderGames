const path = require ('path');


const underConstr ={
    underConstr: (req, res)=>{
        res.render(path.join(__dirname, '../views/under_constr.ejs'))
    }
}




module.exports = underConstr;