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
namespace EjercicioFor
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("PROBANDO");
        }
    }
}