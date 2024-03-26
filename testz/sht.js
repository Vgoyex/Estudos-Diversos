const express = require("express");
const router = express.Router;


let app = express();

app.use(router)
app.listen(3000,()=>{
  console.log("!!! Runn !!!!")
});