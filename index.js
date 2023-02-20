const express = require("express")
const productS = require("./Page/ProductS")
const app = express()
const cors = require("cors")




app.use(cors());
app.use("/", productS)

app.listen(8000,function(){
    console.log("App is running at port : 8000");
})