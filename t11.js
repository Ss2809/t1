const {add,name, currentDate,currentYear} = require('./math');

console.log(currentDate(), currentYear());


const path = require('path');
console.log(__filename);
console.log(__dirname);
console.log(path.parse(__filename));

const profile = path.join(__dirname,"uploads");


console.log(profile);


const os  = require("os")

if(os.platform() === "win32"){
  console.log("window");
}

console.log(os.freemem());
console.log(os.totalmem());


const fs = require("fs")


console.log(fs.readdirSync('./'));

fs.readFile('./', (err,data)=>{
  if(err){
    console.log(err);
  }else{
    console.log(data)
  }
})


const http = require("http")
const server = http.createServer((req,res)=>{
  if(req.url === "/"){
    res.write("Hello World!!");
  }else if(req.url === "/about"){
    res.write("about page");
  }else{
    res.write("not route found")
  }
 
  res.end();
})

server.listen(3000,()=>{
  console.log("server running....")
});

// node t11.js