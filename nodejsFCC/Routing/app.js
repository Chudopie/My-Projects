const http = require('http')
const infoCursos = require('./cursos');
const { parse } = require('path');


const servidor = http.createServer((req,res)=>{
 const metodo = req.method;

    switch (metodo) {
        case 'GET':
            return manejarSolicitudGET(req,res)

        case 'POST':
            return manejarSolicitudPOST(req,res)
        default: 
        res.statusCode = 501;
        console.log(`El metodo no puede ser manejado por el servidor:${metodo}`);
        break;
    }
})

 


function manejarSolicitudGET(req,res) { //200 ok por defecto
        const path = req.url;


    console.log(res.statusCode);
    
    if (path=== '/') {
        // res.writeHead(200,{'Content-Type': 'aplication/json'});
        // res.statusCode=200;//200 es el valor por defecto no es necesario colocarlo
       return res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    }else if(path === '/cursos'){
        // res.statusCode = 200;
       return res.end(`${JSON.stringify(infoCursos)}`)
    }else if(path ==='/cursos/programacion'){
        // res.statusCode = 200
        return res.end(`${JSON.stringify(infoCursos.Programacion)}`)
    }
    res.statusCode =404;
    return res.end('El recurso solicitado no existe')
}
function manejarSolicitudPOST(req,res) {
    const path =req.url;
    if (path === '/cursos/programacion') {

        let cuerpo = '';

        req.on('data', contenido =>{
            cuerpo += contenido.toString();

        });

        req.on('end',()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);

            //Convertir a un objeto de JavaScript.
            cuerpo = JSON.parse(cuerpo)
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);
            res.end('El servidor recibio una solicitud POST para /cursos/programacion');
        })

    }
    
}


const PORT =3000;
servidor.listen(PORT,()=>{
    console.log(`El servidor esta escuchando en el puerto:${PORT}`);
})
//6:14:38 sigue Nodemon