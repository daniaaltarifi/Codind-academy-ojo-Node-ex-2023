// import url from 'node:url';
const fs = require("fs");
const http=require("http")
const path=require("path")
const url=require('url')
const os=require('os');
const crypto=require("crypto");
const querystring = require('querystring');
async function data() {
  try {
    // excersice 1
    const data = await fs.promises.readFile("./example.txt");
    console.log(data.toString());
    // excersice 2

    await fs.promises.writeFile("./example.txt", "hello world");
    console.log("file overwritten");
  } catch (error) {
    console.error(error);
  }
}
data();

// excersice 3
const port=8888;
const hostname='127.0.0.1'
 const server=http.createServer(async(req,res)=>{
   await res.writeHead(200,{'content-type':'text/plain'})
   await res.end("Hello World");
   // excersice 4
    if (req.url==="/file") {
   const read=await fs.promises.readFile('./file.txt')
   console.log(read.toString())
   }

})
server.listen(port,()=>{
    console.log(`server running http://${hostname}:${port}`)
})
   // excersice 5
   const join= path.join("/path/to/file1", "/path/to/file2")
   console.log(join)
// excersice 6
const myUrl=new URL("http://www.example.com:8080/path?query=value#fragment")
const newUrl={protocol:myUrl.protocol,host:myUrl.host,pathname:myUrl.path,search:myUrl.search,query:myUrl.query,hash:myUrl.hash}
console.log(newUrl)
// excersice 7
console.log(os.homedir())
// excersice 8
let mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
let crypt=mykey.update("abc","utf8",'hex')
crypt+=mykey.final("hex")

console.log(crypt);
// excersice 9
const stringHash="Hello World";
const hash=crypto.createHash("sha256")
hash.update(stringHash);
const generateHash=hash.digest('hex');
console.log("hashed string:  "+generateHash)
// excersice 10
const query="name=value&key=value2"
const parsedString=querystring.parse(query);
console.log(parsedString)
// excersice 11
const { exec } = require('child_process');
exec('dir /Q /T:C /A:-D /S', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

// excersice 12

// excersice 13
// var cluster = require('cluster');

// if (cluster.isWorker) {
//   console.log('I am a worker');
// } else {
//   console.log('I am a master');
//   cluster.fork();
//   cluster.fork();
// }
// excersice 14
const dns = require('node:dns');

dns.lookup("www.google.com", (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

// excersice 15
const net=require("net")
const servers = net.createServer((socket) => {
    socket.end('goodbye\n');
  }).on('error', (err) => {
    throw err;
  });
    servers.listen(() => {
    console.log('opened server on', servers.address());
  });
  

//   const nets = require('net');

// const client = new nets.Socket();

// client.on('error', (error) => {
//   console.error('Socket error:', error);
// });

// client.connect(8080, 'localhost', () => {
//   console.log('Connected to the server.');

//   client.write('Hello, server!');
// });

// client.on('data', (data) => {
//   console.log('Received data from the server:', data.toString());
// });

// client.on('close', () => {
//   console.log('Connection closed.');
// });

  


