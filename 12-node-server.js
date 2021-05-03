const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url);
  // res.end('Welcome to our home page')
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  if (req.url === '/about') {
    res.end('Here is our about')
  }
  if (req.url === '/err') {
    res.end('Here is err')
  }
})


server.listen(5000)