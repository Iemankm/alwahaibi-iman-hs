const http=require('http')
const port=process.argv[2]||3001

const server=http.createServer((req,res)=>{

    let b=""

    req
    .on('data',(parts)=>{
        b+=parts
    })
    .on('end',()=>{
        if(b){
            console.log(b)
        }
    })


   
  setTimeout(() => {
    res.end('Hello World!');
  }, 10000);
});


server.listen(port,()=>{
    console.log(`sever ${port}`)
});
