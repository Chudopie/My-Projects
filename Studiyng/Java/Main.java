
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world");


        int[] numerosPrueba= new int[] {1,5,56,5,8,9,5,0,50,3};
        Burbuja numeros = new Burbuja();
       int[] numeros_ordenados= numeros.ordenamiento(numerosPrueba);

       System.out.println(Arrays.toString(numeros_ordenados));
    }
}
