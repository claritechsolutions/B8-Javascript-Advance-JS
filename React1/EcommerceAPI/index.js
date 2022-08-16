const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute=require('./routes/user')
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

dotenv.config();
mongoose
  .connect('mongodb+srv://root:root@cluster0.sbos8m6.mongodb.net/shop?retryWrites=true&w=majority')
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  // app.get('/api/test',()=>{
  //   console.log('test is done')
  // })


app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(5000,()=>{
    console.log('Backend is running')
})