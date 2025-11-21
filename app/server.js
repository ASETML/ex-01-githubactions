// Import the http module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response
  res.end('Hello World\n');
});

// Define the port and host
const port = 3000;
const host = 'localhost';

// Start the server
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
