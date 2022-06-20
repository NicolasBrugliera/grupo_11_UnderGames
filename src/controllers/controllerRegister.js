const path = require ('path');


const register ={
    register: (req, res)=>{
        res.render(path.join(__dirname, '../views/users/register.ejs'))
    }
}




module.exports = register;