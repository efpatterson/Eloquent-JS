// Load HTTP module
// const http = require('http')
// const hostname = 'localhost'
// const port = 8000
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to learn the backend with express')
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000')
})

// create HTTP server
// const server = http.createServer((req, res) => {
//   // set the response HTTP header with HTTP status and content type
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   // send the response body
//   res.end('Welcome to a tutorial for node and koa')
// })

// // print log once the server starts listenting
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })
