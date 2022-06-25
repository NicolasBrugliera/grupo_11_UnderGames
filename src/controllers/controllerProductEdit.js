const path = require ('path');


const productEdit ={
    productEdit: (req, res)=>{
        res.render(path.join(__dirname, '../views/productEdit.ejs'))
    }
}




module.exports = productEdit;