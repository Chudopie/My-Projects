// See https://aka.ms/new-console-template for more information
//CLASE 3 HelloWorld
//namespace Operaciones
//{
//    class Program
//    {
//        static void Main(string[] args) //metodo bloque de codigo que incluye instrucciones
//        {
//            Console.WriteLine("Hello World");
//        }

//    } 
//}
//Clase 4
//namespace IntroducirDatos
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            Console.WriteLine("Introduce una cadena de texto: ");
//            string texto = Console.ReadLine();
//            Console.WriteLine("Has escrito con tu teclado esto: " + "["+texto+"]"  );
//            Console.ReadKey();
//        }
//    }

//}   
//Clase 5 Declarar Variables

//namespace DeclararVariables
//{
//    class Program
//    {
//        static void Main(string[] args)e 
//        {

//            sbyte entero = -128;
//            byte entero2 = 255;
//            int entero3 = 2000000000;
//            uint entero5 =4000000000;
//             double numdecimales1 = 40.87485;
//            decimal numdecimal2 = 40.87485m;
//            char simbolo = '@';
//            Console.WriteLine(simbolo);
//            string palabra = "@asdf434!@#%^&";
//            Console.WriteLine(palabra);

//        }
//    }

//class 6


//namespace DeclararVariables
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {

//            Int32 num1;
//            Int32 num2;
//            Console.WriteLine("Introduce un numero: ");
//            num1 = Int32.Parse(Console.ReadLine());
//            Console.WriteLine("Este es tu numero: " + num1);
//            Console.WriteLine("Introduce otro numero: ");
//            num2 = Int32.Parse(Console.ReadLine());
//            Console.WriteLine("Este es tu numero 2: " + num2);
//            Int32 suma =num1 + num2;
//            Console.WriteLine("El resultado de la suma es: " + suma);


//            //RESTA


//            Console.WriteLine("Ahora la Resta");
//            Console.WriteLine("Introduce un numero para la resta: ");
//            num1 = Int32.Parse(Console.ReadLine());
//            Console.WriteLine("Tu Primer numero de la resta es: " + num1);
//            num2 = Int32.Parse(Console.ReadLine());
//            Console.WriteLine("Tu Segundo numero de la resta es: " + num2);
//            Int32 resta = num1 - num2;
//            Console.WriteLine("La resta es : " + resta);
//        }
//    }
//}

//CLASE 7
//namespace DeclararVariables
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {

//            string nom;
//            byte edad;
//            bool estado_civil;

//            float estatura;
//            char genero;
//            Console.WriteLine("Datos de la persona: ");
//            Console.WriteLine("Introduce el nombre");

//            nom = Console.ReadLine();
//            Console.WriteLine("Introduce la Edad: ");
//            edad = byte.Parse(Console.ReadLine());
//            Console.WriteLine("Esta Casado? : ");
//            estado_civil = bool.Parse(Console.ReadLine());
//            Console.WriteLine("Estatura: ");
//            estatura = float.Parse(Console.ReadLine());
//            Console.WriteLine("Genero m o f?: ");
//            genero = char.Parse(Console.ReadLine());
//            Console.WriteLine($" {nom} tiene {edad} su estado civil es {estado_civil}, tiene una estatura de {estatura} y su genero es {genero} ");
//        }
//    }
//}
//8 Tipo de operadores

//namespace Operadores
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            Int32 numero1 = 40;
//            Int32 numero2 = 80;
//            Int32 Multi = numero1 * numero2;
//            Console.WriteLine($"Esta es la multiplicacion de {numero1} por {numero2} que es igual a {Multi}" );
//            Console.WriteLine("Ahora la Division");
//            Console.WriteLine($"Esta es la division de {numero2} por {numero1} que es igual a {numero2/numero1}");

//            Int32 x = 100;
//            Int32 y = 25;
//            x += y; //Esto es igual a x = x + y
//            Console.WriteLine($"El valor de X era 100, se le sumara su mismo valor mas el valor de Y que es {y}, y ahora su resultado es: {x}");
//            x -= y; //Esto es igual a x= x-y
//            Console.WriteLine($"El valor de X ahora es 125, ahora x que es 125 se le restara lo de y el valor de Y es de:  {y}, y ahora su resultado es: {x}");
//            x /= y; //Esto es igual a x = x/y
//            Console.WriteLine($"El valor de x es 100, se le dividira a su mismo valor el valor de Y que es {y}, y ahora su resultado es: {x}");
//            x *= y; //Esto es igual a x = x*y
//            Console.WriteLine($"El valor de x es 4, se le multiplicara a su mismo valor el valor de Y que es {y}, y ahora su resultado es: {x}");
//        }
//    }
//}
//Clase 9
//namespace Ifcases
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            Console.WriteLine("Ingresa un numero entre el 1 y el 10: ");
//            int num = int.Parse(Console.ReadLine());
//            if (num<=10 && num>=1)
//            {
//                Console.WriteLine($"Tu numero es un numero entre el 1 y el 10, tu numero es el {num}");
//            }
//            else
//            {
//                Console.WriteLine($"Tu numero no es un numero entre el 1 y el 10, tu numero es el {num}");
//            }
//        }
//    }
//}
//Clase 10
//namespace Switchcases
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            Console.WriteLine("Elija un numero entre el 1 y el 3");
//            int num = int.Parse(Console.ReadLine());

//            switch (num)
//            {
//                case 1:
//                    Console.WriteLine($"Ingresaste el numero {num}");
//                    break;
//                case 2:
//                    Console.WriteLine($"Ingresaste el numero {num}");
//                    break;
//                case 3:
//                    Console.WriteLine($"Ingresaste el numero {num}");
//                    break;
//                default: Console.WriteLine($"No ingresaste ningun numero entre el 1 y el 3, tu numero fue el : {num}");
//                    break;
//            }
//        }
//    }
//}


////Curso 11 While
//namespace EjemploWhile
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            Console.WriteLine("Ingresa un numero mayor que 100");
//            int n = int.Parse(Console.ReadLine());

//            while (n >=100)
//            {
//                Console.WriteLine("Se ejecuta el while.");
//                Console.WriteLine($"Ingresaste el valor de {n}");
//                Console.WriteLine("Ingresa otro numero");
//                n = int.Parse(Console.ReadLine());
//            }
//            Console.WriteLine("Programa finalizado");
//            Console.ReadKey();
//        }
//    }
//}

//DOWHILE
//namespace EjemploWhile
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            string nombre;
//            int sueldo =0;
//            Console.WriteLine("Introduce el nombre");
//            nombre= Console.ReadLine();
//            do 
//            {
//                Console.WriteLine("Do while en ejecucion ");
//                Console.WriteLine("Introduce el Sueldo: ");
//                sueldo= int.Parse(Console.ReadLine());
//                if (sueldo >1000)
//                {
//                    Console.WriteLine($"Sueldo Incorrecto, \n Introduce otra vez el sueldo...");                  
//                }
//            } while (sueldo>=1000);
//            Console.WriteLine("Do while finalizado");
//            Console.WriteLine($"El nombre es {nombre} y el sueldo es {sueldo}");
//            Console.ReadKey();
//        }   
//    }
//}


// 13Ciclo FOR 
//namespace EjemploFor
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            for (int i = 1; i <= 5; i++)
//            {
//                Console.WriteLine(i);
//            }
//        }
//    }
//}
//14 Ciclo for2
//namespace EjercicioFor
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            int num;
//            int suma = 0;
//           for (int i = 0; i < 5; i++) 
//            {
//                Console.WriteLine("Introduce un numero Entero : ");
//                num = int.Parse(Console.ReadLine());
//                suma += num;
//                Console.WriteLine($"El numero de num es : {num} y suma es {suma}");
//            }
//            Console.WriteLine($"Se acabo el for el resultado de suma es  {suma}");
//        }
//    }
//}

//15    Mostrar en pantalla de 0 a 100 de 2 en 2 
//namespace EjercicioFor
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            Console.WriteLine("Serie numerica de 0 a 100 de 2 en 2");


//            for (int i = 0; i <= 100; i+=2) 
//            {
//                Console.WriteLine($"Se imprime {i}");
//            }
//        }
//    }
//}

//16/* https://www.youtube.com/watch?v=WE_lH5m1xw8&list=PLDfQIFbmwhrcfhffDWI6b4Ghsw3FbjIDV&index=16*/
//namespace Array
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            string[] nombres; //declarando el arreglo
//            int cantidadnombres;
//            do
//            {
//                Console.WriteLine("Cuantos nombres vas a introducir al programa?");
//                cantidadnombres = int.Parse(Console.ReadLine());

//            } while (cantidadnombres <= 0 );
//            nombres = new string[cantidadnombres];
//            Console.WriteLine(cantidadnombres);
//            for (int i = 0; i < cantidadnombres; i++)
//            {

//                Console.WriteLine("Introduice un nombre");
//                nombres[i] =Console.ReadLine();
//            }
//            Console.WriteLine("Se mostrara el arreglo");

//            for (int i = 0; i < cantidadnombres; i++)
//            {
//                Console.WriteLine($"Posicion {i} : {nombres[i]}");
//            }
//        }
//    }
//}

//Arreglos 17
//namespace Arraycon10numeros
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            int[] arr = new int[10];
//           Console.WriteLine($"Introduce {arr.Length} numeros positivos");
//            int num = 0;




//            for (int i = 0; i <arr.Length   ; i++)
//            {
//                    do
//                    {


//                        Console.WriteLine($"Introduce un numero en la posicion {i + 1}");
//                        num = int.Parse(Console.ReadLine());

//                    } while (num<=0);
//                     arr[i] = num;
//            }
//            Console.WriteLine("Te muestro los numeros del array");
//            for (int i = 0; i < arr.Length; i++)
//            {
//                Console.WriteLine($"Los numeros de los arreglos se mostraran de uno en uno: {arr[i]}");
//            }





//        }
//    }
//}

//Arreglos 18
//namespace Arraycon10numeros
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            int[] arr = new int[5];
//            int var = 0;
//            int suma = 0;

//            Console.WriteLine("Introduce 5 numeros entre 1 y 10");
//            int k = 0;
//            while (k < 5) 
//            {
//                do {
//                    Console.WriteLine("Introduce un numero: ");
//                var = int.Parse(Console.ReadLine());
//                    if( var <1 || var>10)
//                    {
//                        Console.WriteLine("Numero fuera de rango, introduce otro numero");

//                    }
//                } while (var < 1 || var > 10);
//                arr[k] = var;
//                suma += arr[k];
//                k++;
//            }
//            Console.WriteLine($"La suma es: {suma}");
//            Console.WriteLine($"El promedio es es: {suma / arr.Length}");
//            Console.ReadKey();  
//        }
//    }
//}

//Arreglos 19 numeros positivos
//namespace Contador
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            int[] positivos = new int[5];
//            int Contador=0;
//            Console.WriteLine("Introduce 5 numeros enteros");
//            for (int i = 0; i < positivos.Length; i++)
//            {
//                Console.WriteLine($"Introduce el numero {i + 1}");
//                positivos[i] = int.Parse(Console.ReadLine());
//                if (positivos[i]>0)
//                {
//                    Contador++;
//                    Console.WriteLine($"En el arreglo tienes {Contador} numeros positivos");
//                }
//            }
//        }
//    }
//}

//Arreglos 20 Mostrar el mayor
//namespace ArrayMayor
//{
//    class Program
//    {
//        static void Main(string[] args) 
//        {
//            int[] arr = new int[5];
//            int mayor = arr[0];
//            Console.WriteLine($"En la posicion 0 del arreglo, inicialmente hay un {mayor}");
//            Console.WriteLine("Programa para obtener el numero mayor \n Introduce 5 numeros enteros");
//            for (int i = 0; i < arr.Length; i++)
//            {
//                arr[i] = int.Parse(Console.ReadLine());
//                if (arr[i] > mayor) mayor = arr[i];
//                Console.WriteLine($"El numero mayor es {mayor}");
//            }
//        }
//    }
//}
//21 Que son los metodos
//namespace Metodos
//{
//    class Program
//    {
//        static void Main(string[] args) 
//        {
//            //Console.WriteLine(Math.Sqrt(25)); Raiz cuadrada Math.Sqrt(25)
//            double raiz = Math.Sqrt(25);
//            Console.WriteLine(raiz);
//            Console.WriteLine($"La raiz de 25 es: {raiz}");

//            double cincoxcinco = Math.Pow(5,2);
//            Console.WriteLine($"La potencia de 5 a la 2 es{cincoxcinco} ");

//        }
//    }
//namespace Metodos2
//{


//    class Program
//    {
//        void Mensaje()//Metodo para mandar a llamar
//        {
//            Console.WriteLine("Este es un mensaje de prueba!");
//        }
//        static void Main(string[] args )
//        {
//            Program elmensaje = new Program();
//            Program elmensaje2 = new Program(); 
//            elmensaje2.Mensaje2();
//            elmensaje.Mensaje();

//            Console.WriteLine(2+2);


//        }
//        void Mensaje2()
//        {
//            Console.WriteLine("Este es el segundo mensaje");
//        }
//    }


//}
//Metodossinretorno con parametros

//namespace Metodos2
//{
//    class Program
//    {
//        void DuplicaNumero(int numero)
//        {
//            numero = numero * 2;
//            Console.WriteLine(numero);
//        }
//        static void Main(string[] args)
//        {
//            Console.WriteLine("Hello World");


//            Program duplicanumero = new Program();
//            duplicanumero.DuplicaNumero(5);

//        }
//    }
//}


//Metodos sin parametros y sin retorno
//namespace Metodos3
//{
//    class Cuadrado
//    {
//        int num = 0;

//        void Inicializar()
//        {
//            Console.WriteLine("Ingresa el valor del numero: ");
//            num = int.Parse(Console.ReadLine());
//        }

//        void ImprimirCuadrado()
//        {
//            int cuadrado = num * num;
//            Console.WriteLine($"El cuadrado de {num} es: {cuadrado}");
//        }
//        static void Main(string[] args)
//        {
//            Cuadrado accion = new Cuadrado();
//            accion.Inicializar();
//            accion.ImprimirCuadrado();


//        }
//    }
//}

//Metodos con retorno y con parametros
using System.Runtime.CompilerServices;

//namespace MisMetodos
//{
//    class SumandoNumeros
//    {
//        int Suma(int num1, int num2)
//        {
//            return num1 + num2;
//        }
//        string DimeTuNombre (string nombre)
//        {
//            return nombre;
//        }
//        static void Main(string[] args)
//        {
//            SumandoNumeros operacion = new SumandoNumeros();
            
           
//            //Console.WriteLine($"Mi nombre es: {operacion.DimeTuNombre("Eduardo")} y La suma total es de {operacion.Suma(5, 5)}");
//            int valor1;
//            int valor2;
//            int valor3; 
//            Console.WriteLine("Ingresa el primer Valor");
//             valor1 = int.Parse(Console.ReadLine());
//            Console.WriteLine("Ingresa el segundo Valor");
//            valor2 = int.Parse(Console.ReadLine());
//            Console.WriteLine("Ingresa el tercer Valor");
//            valor3 = int.Parse(Console.ReadLine());
//            Console.WriteLine("Ingresa tu nombre ");
//            string nombre = Console.ReadLine();
//            Console.WriteLine($"La operacion de 2 sumas es de {operacion.Suma(valor1,valor2)} y mi nombre es {operacion.DimeTuNombre(nombre)}");
//            operacion.Suma(valor1, valor2,valor3);
          
//        }
//        void Suma(int num1,int num2, int num3)
//        {
//            int resultado = num1 + num2 + num3;

//            Console.WriteLine($"La suma de 3 es de: {resultado}");


//        }
//    }
//}

//Metodos estaticos con retornos y parametros
//Se pueden llamar a metodos sin crear objetos

//namespace Metodos2
//{
//    class Operaciones
//    {
//        static void Main(string[] args) 
//        {
//            int num1;
//            int num2;
//            do {
                
//                Console.WriteLine("Ingresa el primer numero para la suma de dos numeros");
//                num1 = int.Parse(Console.ReadLine());
//                Console.WriteLine("Ingresa el segundo numero para la suma de dos numeros");
//                num2 = int.Parse(Console.ReadLine());

//                if (num1 < 0 || num1 > 100 || num2 < 0 || num2 > 100)
//                {
//                    Console.WriteLine("Los valores 1 y 2 no estan en el rango de 0 a 100 \n vuelve a ingresar los valores");
//                }

//            } while(num1<0 || num1>100 ||  num2 < 0 || num2 >100);


//            Console.WriteLine($"La suma es de : { Suma(num1, num2)}");
//        }
      

//        static int Suma(int num1,int num2)
//        {
//            return num1 + num2;

//        }

//        static int Resta(int num1, int num2)
//        {
//            return num1 - num2;

//        }
//    }
//}

//Ambito de las variables en los metodos y en las clases

namespace Ambito
{
    class Operaciones
    {

        double multi = 0, div = 0;
        static void Main(string[] args) 
        {

            Operaciones operaciones = new Operaciones();
            operaciones.Division(5, 1);



        }

        double Division(double num1, double num2)
        {
            double div = num1 / num2;   
            return div;
        }
        double Multiplicacion(double num1, double num2)
        {
            multi = num1 * num2;    
            return multi;
        }
        private void MuestraResultados()
        {
            Console.WriteLine($"El resultado de la division es: {div}");
            Console.WriteLine($"El resultado de la multiplicacion es {multi}");
        }
    }

    

}