const Product = require('../models/Product');

module.exports = {
  index: function (req,res) {

     Product.find().exec().then((data) =>{
       res.status(200).json({
         message: "Success Read Products",
         data
       });
     }).catch(err =>{
       res.status(500).json({
         message: err,
       });
     });
  },
  create: function (req,res) {

      const input = {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
      }
     Product.create(input).then((data) =>{
       res.status(200).json({
         message: "Success Add  Products",
         data
       });
     }).catch(err =>{
       res.status(500).json({
         message: err,
       });

     });
  },
  update: function (req,res) {

     const { name, price, image } = req.body;
     const input = {name,price, image};
     const id = req.params.id;

     Product.findOneAndUpdate({_id:id},input).exec().then((data) =>{
       res.status(200).json({
         message: "Success Update Product",
         data
       });
     }).catch(err =>{
       res.status(500).json({
         message: err,
       });
     });
  },
  destroy: function (req,res) {

     const id = req.params.id;
     Product.findOneAndRemove({_id:id}).exec().then((data) =>{
       res.status(200).json({
         message: "Success Delete Product",
         data
       });
     }).catch(err =>{
       res.status(500).json({
         message: err,
       });
     });
  }
}

