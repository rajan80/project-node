const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

let dataPath = path.join(__dirname, "../popular-articles.json");

let arr = [];
rp("https://reddit.com/r/popular.json")
.then((body) => {
    
    JSON.parse(body).data.children.forEach((item) => {
        arr.push({
            title: item.data.title,
            url: item.data.url,
            author:item.data.author
        })
        fs.writeFile('popular-articles.json', JSON.stringify(arr), (err) => {
            if (err) throw err;

            console.log("sucess");

        })
    })
} 
);
