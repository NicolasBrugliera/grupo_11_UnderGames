const path = require ('path');


const userList ={
    userList: (req, res)=>{
        res.render(path.join(__dirname, '../views/userList.ejs'))
    }
}




module.exports = userList;