const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a server
const server = http.createServer((req, res) => {
  // Set the required headers
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');

  const filePath = path.join(__dirname, req.url === '/' ? '/index.html' : req.url);

  // Serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404: File Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

// Start the server
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
