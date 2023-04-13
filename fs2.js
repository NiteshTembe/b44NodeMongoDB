const fs = require("fs");

const quote2 = "working2";
 for(let i=1; i<11; i++)
 fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>{
    console.log("completed writing!")
 })