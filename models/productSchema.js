const mongoose =require('mongoose');

const productSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    },
{ timestamps: true, versionKey:false }
    
)

const productModel= mongoose.model('product',productSchema);
module.exports=productModel;