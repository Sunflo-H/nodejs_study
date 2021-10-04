const http = require('http');
const fs = require('fs');
const url = require('url');
var app = http.createServer(function(request,response){
    let url = request.url;
    
    let template;
    fs.readFile('test.txt','utf-8',function(err,data){
        template = `
                <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <h1>home 입니다.</h1>
                        <h1>===================</h1>
                        <p>${data}</p>
                    </body>
                </html>
                `
        
        
        response.writeHead(200);
        response.end(template);
    })
})
app.listen(3000);