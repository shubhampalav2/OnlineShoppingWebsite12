const express=require("express");
const app=express();
const bodyParser = require("body-parser");
const cookiePraser=require("cookie-parser")
const fileUpload=require("express-fileupload")
const path=require("path")
app.use(cookiePraser())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
const errorMiddleware=require('./middleware/error')

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
  }
//Imports from Route
const product=require("./routes/productRoute");
const user=require("./routes/userRoutes")
const order=require("./routes/orderRoute")
const payment = require("./routes/paymentRoute");
app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname,"../frontend/build")))

app.get("*",(req,res,next)=>{
res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})
// Middleware for errors
app.use(errorMiddleware)
module.exports=app;