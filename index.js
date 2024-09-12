const http = require('http');
const fs = require('fs');
const path = require('path');

// const server = http.createServer((request, response) => {
// // request = so'rov
// // response = javob
// console.log(request.url);
// response.write("<h1>Hello world<h1>");
// response.end();
// })

const server = http.createServer((req, res) => {
    if(req.method === "GET"){
        res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});

        if(req.url === "/"){
            fs.readFile(path.join(__dirname, "templates", "index.html"), "utf-8", (err, conten) =>{
                if (err) throw err
                res.end(conten);
            })
        }else if(req.url === "/about"){
            fs.readFile(path.join(__dirname, "templates", "about.html"), "utf-8", (err, conten) =>{
                if (err) throw err
                res.end(conten);
            })
        }else if(req.url === "/contact"){
            fs.readFile(path.join(__dirname, "templates", "contact.html"), "utf-8", (err, conten) =>{
                if (err) throw err
                res.end(conten);
            })
        }else if(req.url === "/api/admin"){
            res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
            const admin = {nickname: "Nonab"}
            res.end(JSON.stringify(admin));
        }


    }else if(req.method === "POST"){
        res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
        const name = []

        req.on("data", data => {
            name.push(Buffer.from(data))
        })
        req.on("end", () => {
            const message = name.toString().split('=')[1]
            res.end(`Name was added ${message}`)
        })
    }
})

server.listen(3000, ()=>{
    console.log("Server was created");
})