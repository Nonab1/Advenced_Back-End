const http = require('http');

const server = http.createServer((request, response) => {
// request = so'rov
// response = javob
console.log(request.url);
response.write("Hello world");
response.end();
})

server.listen(3000, ()=>{
    console.log("Server was created");
})