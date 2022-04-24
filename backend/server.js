const express=require('express');
const userRoutes=require('./routes/authRoutes');
const productRoutes=require('./routes/productRoutes')
const mongoose=require('mongoose');
const cors = require('cors')
const app=express();


mongoose.connect('mongodb://localhost:27017/CarSell')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log(err.message);
})


app.get('/',(req,res)=>{
    res.send("hii everything fine");
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
// app.use( cookieParser() );
app.use('/',userRoutes);
app.use('/',productRoutes);

app.listen(4000,()=>{
    console.log(`server running on port 4000`);
})