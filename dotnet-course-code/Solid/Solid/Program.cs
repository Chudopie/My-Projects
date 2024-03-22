// See https://aka.ms/new-console-template for more information

namespace SOLIDPrinciples
{
    //Single Responsibility Principle
    //One class should just be created to one purpose,A class should have only one reason to change
    //Este es un ejemplo de como no se debe hacer

    class Calculadora
    {
        /*Hay que cambiar la logica en dos casos tnato si se quiere modificar la suma como la resta, ademas si se quieren implementar mas operaciones se tendria que modificar la clase
         */

        public double Sumar(double a, double b)
        {
            return a * b;
        }
        public double Restar(double a, double b)
        {
            return (a - b);

        }
    }
    //Esta es la forma correcta de hacerlo
    class Sumador
    {
        public double Sumar(double a, double b) 
        {
            return a + b;
        }
        class Restador
        {
            public double Restar(double a,double b)
            {
                return a - b;
            }
        }
        class Multiplicador
        {
            public double Multiplicar(double a,double b)
            {
                return a * b;
            }
        }
        class Divisor
        {
            public double Dividir (double a,double b)
            {
                return a / b;
            }
        }
    }


    //OPEN CLOSED PRINCIPLE: Se puede extender el sistema, sin modificar la clase existente
   /*Este es un ejemplo de como no se debe hacer*/ 

    public class CalculadoraDescuento
    {   //Si se quiere agregar un nuevo tipo de producto se tendria que modificar la clase
        public double AplicarDescuento(double precio, string tipoProducto)
        {
            if (tipoProducto == "Electronico")
            {
                return precio * 0.8; //Descuento del 20% para productos electronicos
            }
            else if (tipoProducto == "Ropa")
            {
                return precio * 0.9; //Descuento del 10% para ropa
            }
            else
            {
                return precio; //Sin descuento por defecto
            }
        }
    }
    //Esta es la forma correcta de hacerlo
   //Si se quiere agregar un nuevo tipo de producto solo se tendria que agregar una nueva clase implementando la interfaz
   public interface IDescuento
    {
        double AplicarDescuento(double precio);
    }

    public class DescuentoElectronico : IDescuento
    {
        public double AplicarDescuento(double precio)
        {
            return precio * 0.8; //Descuento del 20% para productos electronicos
        }
    }

    public class DescuentoRopa : IDescuento
    {
        public double AplicarDescuento(double precio)
        {
            return precio * 0.9; //Descuento del 10% para ropa
        }
    }
    public class DescuentoCartas :IDescuento
    {
        public double AplicarDescuento(double precio)
        {
            return precio; //Sin descuento para las cartas
        }
    }

    //Liskov substitution principle Bien Aplicado: //Subclass objects must behave like superclass objects.

    //Vehiculo es la clase abstarcta que todos los vehiculos deben heredar

    public abstract class Vehiculo
    {
        public abstract void Conducir();

    }

    public class Auto : Vehiculo
    {
        public override void Conducir() => Console.WriteLine("Conducir un auto");
    }
    public class Camion : Vehiculo
    {
        public override void Conducir() => Console.WriteLine($"Conducir un Camion");
    }
    //public class Avion : Vehiculo
    //{
    //    public override void Conducir() => Console.WriteLine("Conducir un Avion");
    //}

    //Violando el Liskov Substitution Principle
    public class Programa
    {
        public static void ProbarConduccion(Vehiculo vehiculo)
        {
            vehiculo.Conducir();
        }
        public static void Main(string[] args)
        {
            var auto = new Auto();
            ProbarConduccion(auto);

            var camion = new Camion();
            ProbarConduccion(camion);

            var avion = new Avion();
            ProbarConduccion(avion); //Esto generara una excepcion

        }
    }
    // Avion es una subclase de Vehiculo pero no deberia serlo ya que no se puede conducir, solo volar
    // por lo que no cumple con el principio de sustitucion de Liskov
    public class Avion : Vehiculo
    {
        public override void Conducir() => throw new NotImplementedException();
    }

    //Interface Segregation The program should not depend on interfaces that it does not use
    //Imaginemos que creamos una interfaz llamada trabajador y tiene dos metodos: trabajar y dormir
    public interface ITrabajador
    {
        void Trabajar();
        void Dormir();

    }
    /*El robot no puede dormir por lo que no deberia implementar la interfaz, por lo que no  cumple con el principio de segregacion de interfaces*/

    public class Robot: ITrabajador
    {
        public void Trabajar()
        {
            Console.WriteLine("El robot esta trabajando");

        }

        public void Dormir()
        {
            //El robot no puede dormir
        }
    }
    public class Empoleado: ITrabajador
    {
        public void Trabajar()
        {
            Console.WriteLine("El empleado esta trabajando.");
        }
        public void Dormir()
        {
            Console.WriteLine("El empleado esta durmiendo");
        }
    }
    

    //Esta es la forma correcta de hacerlo
    //Se crean dos interfaces separadas para cada accion
    // y se implementan en las clases correspondientes
    public interface ITrabajador2
    {
        void Trabajar();
    }
    public interface IDormidor
    {
        void Dormir();
    }

    //El robot no puede dormir por lo que no deberia implementar la interfaz dormidor

    public class Robot2: ITrabajador2
    {
        public void Trabajar()
        {
            Console.WriteLine("El robot esta trabajando.");
        }
        //El empleado puede trabajar y dormir por lo que implementa las dos interfaces
    }
    public class Empleado2: ITrabajador2, IDormidor
    {
        public void Trabajar()
        {
            Console.WriteLine("El empleado esta trabajando");
        }
        public void Dormir()
        {
            Console.WriteLine("El empleado esta durmiendo.");
        }
    }

    //Dependency Inversion Modulos de alto nivel no dependan de los modulos de bajo nivel, ambos dependen de una interfaz comun
    public interface INaveEspacial
    {
        //Abstraccion comun para las naves espaciales
        public void Despegar();
        public void Aterrizar();
    }
    //Modulo de alto nivel que depende de la abstraccion

    public class SistemaControlNaves
    {
        //Todas las naves espaciales que implementen la itnerfaz INaveEspacial 
        //Pueden ser operadas por el sistema de control de naves

        private INaveEspacial nave;

        public SistemaControlNaves(INaveEspacial nave)
        {
            this.nave = nave;
        }
        public void OperarNave()
        {
            nave.Despegar();
            nave.Aterrizar();

        }
        //Modulo de bajo nivel - Nave Caza

        public class NaveCaza: INaveEspacial
        {
            public void Despegar()
            {
                Console.WriteLine("NAve Caza Despegando..");

            }
            public void Aterrizar()
            {
               Console.WriteLine("Nave Caza Aterrizando... ");
            }
        }
        public class NaveRecolectora : INaveEspacial
        {
            public void Despegar()
            {
                Console.WriteLine("Nave Recolectora Despegando");
            }
            public void Aterrizar()
            {
                Console.WriteLine("Nave Recolectora Aterrizando...");
            }
        }
    }
}
