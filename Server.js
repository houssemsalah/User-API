const express = require("express");
require("dotenv").config();
const dbConnect=require("./config/connectDB.js");
const app = express();

//connect DB

dbConnect();
//create routes
//middleware routing
app.use(express.json());
app.use("/api/user", require("./routes/UserRouter"));

app.listen(process.env.PORT,(err) => 
err?console.error(err):console.log("Server is running"));