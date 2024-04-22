/*Ejercicio 1
Realizar una funcion que nos permita realizar las 4 operaciones aritmeticas, es decir nos permita:
sumar, restar, multiplicar, dividir. La funcion tiene que recibir 3 parametros , dos de ellos deben de ser
los valores (a y b) y el nombre de la operacion que debe de pasarse con letras minusculas, si el parametro
de la operacion no es valido que mande un error personalizado*/

function operacionesMatematicas(a,b,operacion) {
   
        switch (operacion) {
            case 'suma':
                console.log(a+b);
                
                break;
            case 'resta':
                console.log(a-b);
                break;
            case 'multiplicacion':
                console.log(a*b);
                break
            case 'division' :
                console.log(a/b);
                break
            default:`No valido, Esta no es ninguna operacion...`
                break;
        }


}

operacionesMatematicas(10,2,'suma')