let path = require('path');
let fs = require('fs');


let chirps=[{name:"Jake", chirp: 'Hello'},
{name:"John", chirp: 'Hello'},
{name:"Josh",  chirp: 'Hello'},
{name:"Garette",  chirp: 'Hello'},
{name:"John",  chirp: 'Hello'}
]

fs.writeFile('chirps.json', JSON.stringify(chirps),(err) => {
    if (err) throw err;

    console.log("sucess");
});

