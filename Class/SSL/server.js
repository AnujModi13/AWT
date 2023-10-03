const express=require("express");
const helmet =require("helmet");
const https=require('https');
const path=require('path');
const fs=require('fs');

const app=express();
app.use(helmet());

app.use(express.urlencoded({
    extended:true
}))

app.get("/",(req,res)=>{
    res.send("Rakesh is on ");
})
console.log(__dirname);
const sslServer=https.createServer({
    key:fs.readFileSync(path.join(__dirname,'certi','key.pem')),
    cert :fs.readFileSync(path.join(__dirname,'certi','cert.pem')),
},app)

//openssl genrsa -out key.pem
// openssl req -new -key key.pem -out csr.pem
// openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

// app.listen(8000,()=>
// {
//     console.log("Server running on port 8000");
// })

sslServer.listen(8001, ()=> console.log('Secure server on port 8001'));