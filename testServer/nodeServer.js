const http=require('http');

const hostname='127.0.0.33';
const port='3000';

handler=(req,res)=>{
    if(req.url==="/api" && req.method==="GET")
    {
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('Welcome to world of Async Programming\n');
    }
    else
    res.end('Invalid Request\n');
}

const server=http.createServer(handler);

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/api`);
});