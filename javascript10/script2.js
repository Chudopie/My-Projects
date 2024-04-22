//2 realizar una funcion que almacene en un arreglo todos los numeros pares desde a hasta b



    

// const pares = function () {
//     let array = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < array.length; i++) {
//     if (array[i%2] ===2 ) {
//         let elemento = [i+1]
//         console.log(elemento);
//     }    
// }
// }
// pares()

//Resuelto del video
// function ejercicioDos(a=0,b=0) {
//         let nums = []
//         for (let i = a; i <=b; i++) {
//             if (i%2 === 0) {
//                 nums.push(i)
//                 console.log(i);
                
//             }
//         }
//         console.log(nums);
// }
// ejercicioDos(1,20)


function ejercicioDosPractica(x=0,y=0) {
            let arrayPractica =[]
            for (let i = x; i <= y; i++) {
                if (i%2 === 0 ) {
                    arrayPractica.push(i)
                    console.log(i);

                }    
            }    
}
ejercicioDosPractica(1,20)
