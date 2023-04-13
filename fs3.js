const fs = require("fs");
const [,,n] = process.argv;

const quote3 = "created note file";
 for(let i=1; i<=n; i++){
 fs.writeFile(`./backup/note-${i}.txt`,quote3,(err)=>{
    console.log(`completed writing! note-${i}.txt`)
 })
}