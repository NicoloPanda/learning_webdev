const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/**Meaning of the whole code in detail:
 *  1. Importing the http module from node
 * 2. Setting the hostname and port
 * 3. Creating a server using the createServer method of the http module
 * 4. Setting the status code of the response to 200
 * 5. Setting the header of the response to text/plain
 * 6. Sending the response with the text Hello, World!
 * 7. Setting the server to listen to the port and hostname
 * 8. Logging a message to the console when the server is running
 * pre-built variables and methods in this code:
 * 1. http: The http module
 * 2. createServer: A method of the http module that creates a server
 * 3. statusCode: A property of the response object that sets the status code of the response
 * 4. setHeader: A method of the response object that sets the header of the response
 * 5. end: A method of the response object that sends the response
 * 6. listen: A method of the server object that sets the server to listen to the port and hostname
 * 7. console.log: A method of the console object that logs a message to the console
 * 8. hostname: The hostname of the server
 * 9. port: The port of the server
 * 10. server: The server object
 * 11. req: The request object
 * 12. res: The response object
 * 13. url: The url of the request
 * 14. method: The method of the request
 * 18. write: A method of the response object that writes to the response
 * 29. statusCode: The status code of the response
 */