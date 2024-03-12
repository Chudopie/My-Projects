let infoCursos = {
    'Programacion':[
            {id:1,
             titulo:'Aprende Python',
             lenguaje:'Python',
             vistas:15000,
             nivel: 'basico',   
            },
    
            {id:2,
            titulo:'Python Intermedio',
            lenguaje:'python',
            vistas:'13553',
            nivel:'Intermedio'},
            
            {id:3,
             titulo:'Aprende JavaScript',
             lenguaje:'javascript',
             vistas:'102223',
             nivel:'basico'
            }
    ],
    'Matematicas':[
        {
            id:1,
            titulo: 'Aprende Calculo',
            tema:'calculo',
            vistas: 12427,
            nivel:'basico',
        },
        {
            id:2,
            titulo:'Aprende Algebra',
            tema: 'algebra',
            vistas:15722,
            nivel:'Intermedio'
        }
    ]   


}

module.exports.infoCursos =infoCursos;