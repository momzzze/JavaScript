const http=require('http')

http.createServer((req,res)=>{
    res.write('Hi')
    res.end()
}).listen(1337)

console.log('Node.js server running on port 1337')