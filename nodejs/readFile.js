const fs = require('fs');
fs.readFile('sample.txt',{encoding: 'utf8'},function(err, data){
    console.log(data);
})