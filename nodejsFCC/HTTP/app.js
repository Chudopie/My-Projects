const http =require('http');
const servidor = http.createServer((req,res)=>{
   //PROCESO
    res.end('Hola mundo'); 
});
servidor.listen(3000, ()=>{
    console.log('El servidor esta escuchando...');
});