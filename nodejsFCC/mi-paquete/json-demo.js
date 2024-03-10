let infocurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642.,
    "temas": [
        "JavaScript",
        "Node.js",
    ],
    "esPublico":true
}   
//Objeto -> Cadena de Caracteres

//Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infocurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);


//Cadena de Caracteres -> Objeto de JS
let infoCursoObjeto = JSON.parse(infoCursoJSON); //parse permite convertir una cadena de caracteres a objeto
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto.titulo);
