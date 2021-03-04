const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

let dataPath = path.join(__dirname, "./downloads/id.json");
let arr= [];

rp("https://reddit.com/r/popular.json")
.then((body) => {
    
    JSON.parse(body).data.children.forEach((item) => {
         if (path.extname(item.data.url)==".png"||path.extname(item.data.url)==".jpg"||path.extname(item.data.url)==".gif"){
            arr.push(item.data.url)

         }    
       /* arr.push(
         { jpg: item.data.jpg,
            gif: item.data.gif,
            png:item.data.png,
        })*/
        fs.writeFile (dataPath, JSON.stringify(arr), (err) => {
            if (err) throw err;

            console.log("sucess");

        })
    })

})
