public class Burbuja {
       public  int[] ordenamiento(int[] numeros){

        int auxiliar;
        int[] ordenado;

        for (var i = 0;  i < numeros.length; i++ ) {
            for (var j = 0; j < numeros.length -i; j++) {
                
                if (numeros[j] < numeros[j+1]) {
                    
                    auxiliar = numeros[j];
                    numeros[j] = numeros [ j + 1];
                    numeros[j+1] = auxiliar;
                }
            }
            ordenado = numeros;
        }
        return ordenado;
       }
}
