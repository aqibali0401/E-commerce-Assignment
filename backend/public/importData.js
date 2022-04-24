
const mongoose = require('mongoose');
const fs = require('fs')
const Product = require('./../../backend/models/productModel');

mongoose.connect('mongodb://localhost:27017/CarSell').then(()=>console.log('DB is Connected'));

const tours = JSON.parse(fs.readFileSync(`${__dirname}/product.json`,'utf-8'));

const importData = async()=>{
    try{
        await Product.create(tours);
        console.log('tour data is created successful');
        process.exit();
    }catch(err){
        console.log(err);
    }
}

const deleteData = async()=>{
    try{
        await Product.deleteMany();
        console.log('tour data is delete successful');
        process.exit();
    }catch(err){
        console.log(err);
    }
}

if(process.argv[2]=== '--import'){
    importData();
}else if(process.argv[2]==='--delete'){
    deleteData();
}
