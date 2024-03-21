// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, C# Programmers!");
// Console.WriteLine("Hello, C# Programmers!");
// Console.Write("First");
// Console.Write("Second");
// Console.Write("Primera Linea");
// Console.Write(", Tambien primera Linea");
// Console.WriteLine("Despues de este va en otra linea");
// Console.WriteLine("Ahora si va en otra linea");
// Console.WriteLine(args[0]);


//C:\Users\USER\documents\github\my-projects\dotnet-course-code>

namespace HelloWorld
{
    internal class Program
    {
        static void Main(string[]args)
        {

            int myInt = 5;
            int mySecondInt = 10;
            if(myInt > mySecondInt)
            {
                 myInt += 10;
            }
            Console.WriteLine(myInt);

            string myCow = "cow";
            string myCapitalizedCow = "Cow";

            if (myCow == myCapitalizedCow.ToLower())
            {
                Console.WriteLine("Equal");

            } else 
            {
                Console.WriteLine("not Equal");
            }

            // int myInt = 5;
        
            // int mySecondInt = 10;
            // Console.WriteLine(myInt.Equals(mySecondInt));
            // Console.WriteLine(myInt.Equals(mySecondInt/2));
            
            // Console.WriteLine(myInt != mySecondInt);
            // Console.WriteLine(myInt == (mySecondInt/2));
            // Console.WriteLine(myInt != (mySecondInt/3));


            // Console.WriteLine(myInt >= mySecondInt );
            // Console.WriteLine(myInt > mySecondInt - 6);
            // Console.WriteLine(myInt >= mySecondInt / 2);
            // Console.WriteLine(myInt <= mySecondInt);
            // Console.WriteLine(myInt < mySecondInt);

            // Console.WriteLine(5*2 <= 10 && 5> 10/2);

            // Console.WriteLine(5*2 <= 10 && 5> 10/2 || 5>2);


//             Console.WriteLine("Hello World");

// var names = new[] { "Ana", "Felipe", "Emillia" };
// foreach(var name in names)
// {
//     Console.WriteLine($"Hello {name}");
// }
        //     Console.WriteLine(myInt);

        //     myInt++;

        //     Console.WriteLine(myInt);

        //     myInt+=6;

        //     Console.WriteLine(myInt);

        //     myInt-=6;

        //     Console.WriteLine(myInt);

        //     Console.WriteLine(myInt * mySecondInt);
        //     Console.WriteLine(myInt / mySecondInt);
        //     Console.WriteLine(myInt - mySecondInt);
        //     Console.WriteLine(myInt + mySecondInt);

        //     Console.WriteLine(5+5*10);
        //     Console.WriteLine((5+5)*10);

            //mathfunction for exponnents
            // Console.WriteLine(Math.Pow(5,4));
            // Console.WriteLine(Math.Sqrt(25));
            // string myString = "test";
            // Console.WriteLine(myString);
            // myString+=", second part.";
            // Console.WriteLine(myString);
            // myString = myString + "This is the  \" third\" part.";
            // string[] myStringArr = myString.Split(".");
            // Console.WriteLine(myStringArr[0]);
            // Console.WriteLine(myStringArr[1]);
            // Console.WriteLine(myStringArr[2]);
            // Console.WriteLine(myStringArr[3]);

            // Solid Principles
            //S Single responsability
        }
    }
}
