const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:'prduct.jpeg'
    },
    created:{
        type:Date,
        default: new Date(Date.now())
    }
})


module.exports=mongoose.model("Product",productSchema);