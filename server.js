//Packages
const http = require('http');

const PORT1 = 7000;
const PORT2 = 7500;

const goodHandleRequest = (request,response) =>{
  response.end(`YOU ARE AWESOME! ${request.url}`);
}
const bagHandleRequest = (request,response) =>{
  response.end(`YOU ARE THE WORST! ${request.url}`);
}
const server1 = http.createServer(goodHandleRequest);
const server2 = http.createServer(bagHandleRequest);

server1.listen(PORT1, () => {
  console.log(`PORT1 WORKS! http://localhost:${PORT1}`);
});
server2.listen(PORT2, () => {
  console.log(`PORT2 WORKS! http://localhost:${PORT2}`);
});
