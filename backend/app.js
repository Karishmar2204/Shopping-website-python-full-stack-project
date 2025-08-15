const express = require('express');
const app =express();
const dotenv =require('dotenv');
const path =require('path');
const cors =require('cors');
const connectDatabase =require ('./config/connectDatabase');
dotenv.config({path:path.join(__dirname,'config','.env') })
const Products=require('./routes/product');
const Orders=require('./routes/Order');

connectDatabase();
app.use(express.json());
app.use(cors());
app.use('/api/V1',Products);
app.use('/api/V1',Orders);


app.listen(process.env.PORT,() =>{
    console.log(`Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});



