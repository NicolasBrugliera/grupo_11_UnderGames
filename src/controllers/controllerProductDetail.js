const path = require ('path');


const productDetail ={
    productDetail: (req, res)=>{
        res.render(path.join(__dirname, '../views/productDetail.ejs'))
    }
}




module.exports = productDetail;