const path = require ('path');


const login ={
    login: (req, res)=>{
        res.render(path.join(__dirname, '../views/users/login.ejs'))
    }
}




module.exports = login;