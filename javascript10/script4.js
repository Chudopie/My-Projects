/*
Hacer una funcion que filtre todos los numeros que sean multiplos
del 3 de un arreglo que contenga los numeros del 1 al 100
*/
//Ejecucion de funciones

//
function ejercicio4(a=0,x=0) {
    let array4 = []
    for (let i = a; i <= x; i++) {
                
        if (!(i%3)) {
                array4.push(i)
           
        }
        
    }
    console.log(array4);
}
ejercicio4(1,30)