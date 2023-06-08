const { query } = require('express');
const productModel = require('../models/poductSchema.js');



// Insert Data ....

exports.createProduct = (req, res) => {
  let reqBody = req.body;
  
  productModel.create(reqBody)
    .then(data => {
      res.status(201).json({
        status: "success",
        data: data
      });
    })
    .catch(err => {
      res.status(400).json({
        status: "fail",
        data: err
      });
    });
};


exports.getProducts = (req,res)=>{
    let query={};
    let projection = 'name price '
    productModel.find(query,projection) 
     .then(data => {
      res.status(201).json({
        status: "success",
        data: data
      });
    })
    .catch(err => {
      res.status(400).json({
        status: "fail",
        data: err
      });
    });
  }
