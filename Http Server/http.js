const http = require("http");
const fs = require("fs");
// level 1
const port = 2020;

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/user") {
      res.setHeader("content-type", "text/plain");
      const data = await fs.promises.readFile("./text.txt");
      console.log(data.toString());
      const user = await fs.promises.readFile("./user.js");
      //print the text.txt file
      //res.end(data)
      res.end(user);
   
    }
    // level 2
    else if (req.url == "/trainee") {
    //print the html file in the server
    //   res.setHeader("contene-type", "text/html");
    //   let html = await fs.promises.readFile("./trainee.html");
    //   console.log(html.toString());
    //   res.end(html);
    const trainee = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Alex', age: 35 }
      ];

      let traineeJson=JSON.stringify(trainee);
      res.setHeader('content-type','application/json')
      res.end(traineeJson)
    }
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(port, () => {
  console.log("Server running");
});
// level 3


const express = require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/user.html");
});
app.post('/postData',sendData);
async function sendData(req,res) {
    let data= await req.body.text
    console.log(data)

    // let final;
    // await fs.readFileSync('./config.json')
    // let json=[]
    // let arr=json.push(data)
    res.writeHead(200,'content-type','application/json')
await fs.writeFileSync("./config.json",JSON.stringify(data))
    
res.end("hello")
console.log("updateed")
}
app.listen(8080, () => {
    console.log("Server running");
});




