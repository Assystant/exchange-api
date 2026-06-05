const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 4000
const BASE = path.join(__dirname, 'package')

http.createServer((req, res) => {
  const filePath = path.join(BASE, req.url)
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Not found' }))
      return
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(data)
  })
}).listen(PORT, () => console.log(`Exchange API serving on :${PORT}`))
