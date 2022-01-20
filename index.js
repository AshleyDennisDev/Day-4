/// sync

const fs = require('fs')

function readFile(){
    const data = fs.readFileSync('data.json', "utf-8")
    console.log(data)
}
readFile()
//----------------------------------------------------

/// async
const fs = require("fs");
function dataFile() {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
dataFile()
