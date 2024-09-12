const http = require('http');

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
        res.end(`
            <h1>Send name</h1>
            <form method="post" action="/">
                <input name="name" placeholder="Name">
                <button type="sumbit">Sumbit</button>
            </form>    
        `)
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