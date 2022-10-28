const { createServer } = require('http')
const fs   = require('fs')

const server = createServer((req,res) => {
  if(req.url === '/home' || req.url === '/' || req.url === ''){
     res.writeHead(200, {'Content-Type': 'text/html'})
     fs.createReadStream(__dirname + '/home.html').pipe(res)   
  }else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'})
     fs.createReadStream(__dirname + '/contact.html').pipe(res)
  }else if(req.url === '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'})
     fs.createReadStream(__dirname + '/about.html').pipe(res)
  }
})

server.listen(8080, 'localhost')