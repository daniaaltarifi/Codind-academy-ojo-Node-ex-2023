// const http=require('http');
// // const hostname='127.0.0.1'
// const port=8080;
// const server= http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//       res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//       res.setHeader('Access-Control-Max-Age', '86400');
//     res.writeHead(200,{'Content-type':'text/plain'})
//     res.end('test1 2244')
// });
// server.listen(port,()=>{
//     console.log(`server running http://localhost:${port}`)
// });
const express = require("express");
const app = express();

app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});