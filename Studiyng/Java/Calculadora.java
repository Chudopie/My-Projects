import java.util.Scanner;

public class Calculadora {

    public static void main(String[] args) {
        
        char operador;
        double num1,num2,resultado;

        Scanner entrada = new Scanner(System.in);
        System.out.println("indicame la operacion matematica que deseas realizar, +,-,*,/");
        operador = entrada.next().charAt(0);
        System.out.println(operador);
        System.out.println("Ingresa el primer numero: ");
        num1=entrada.nextDouble();
        System.out.println("Ingresa el segundo numero: ");
        num2=entrada.nextDouble();
        entrada.close();

    

        switch (operador) {
            case '+':

                resultado = num1+num2;

                break;
            case '-': 

                resultado = num1-num2;

            break;

            case '*': 

                resultado = num1*num2;

            break;
            case '/': 

                resultado = num1/num2;
           
            break;

            default:
            resultado = 0;

           
        }
        System.out.println("Resultado: " + resultado);

    }
}