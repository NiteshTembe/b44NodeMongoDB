const fs = require("fs");

const quote = "working1";
 fs.writeFile("./awesome.html",quote,(err)=>{
    console.log("comleted writing!")
 })