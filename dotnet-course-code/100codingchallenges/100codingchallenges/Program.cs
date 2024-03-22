// See https://aka.ms/new-console-template for more information

////Problem 1
//namespace farenheitToCentigrade
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            Console.WriteLine("Please write the Temperature on Farenheit");
//            float farenheit;
//            farenheit = float.Parse(Console.ReadLine());


//            float C = 5f * (farenheit - 32f) / 9f;

//            Console.WriteLine($"The Centigrade is {C}");
//        }
//    }
//}

//Problem 2

//namespace HolidaySpending
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            Console.WriteLine("What is your initial budget?");
//            int budget;

//            budget  = int.Parse(Console.ReadLine());
//            Console.WriteLine("How much do you Spent on food");
//            int food;
//            food = int.Parse(Console.ReadLine());
//            Console.WriteLine("How much do you Spent on trips");
//            int trips;
//            trips = int.Parse(Console.ReadLine());
//            Console.WriteLine("How much do you Spent on Presents");
//            int presents;
//            presents = int.Parse(Console.ReadLine());

//            int moneyspend   = food + trips + presents;
//            int moneyleft = budget - moneyspend;
//            Console.WriteLine($"your money spended is {moneyspend}, \n How much is left now? \n your money now is: {moneyleft}");
//        }
//    }
//}

//Problem 3
//AgeDrivingSelection

//namespace AgeSelection
//{
//    class Program
//    {
//         static void Main(string[] args)
//        {


//            Console.WriteLine("Let me check if u can drive \n  How old are you?");
//            int age;
//            age = int.Parse(Console.ReadLine());

//            if (age>16 && age<90)
//            {
//                Console.WriteLine($"Ok you Can drive you are over 16 years old");

//            }else if (age<16)
//            {
//                Console.WriteLine($"You don't have enough age for driving, come back when you're 16 ");
//            }else if (age>=90)
//            Console.WriteLine("You should not drive You are too old");
//        }
//    }
//}

//Computer Science Selection
//namespace ComputerScienceSelection
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            Console.WriteLine("Enter your favourite subject");
//            string FavouriteSubject = Console.ReadLine();

//            if (FavouriteSubject.ToLower() == "computer science")
//            {
//                Console.WriteLine("You must be very clever");
//            }
//            else
//            {
//                Console.WriteLine($"Computer Science isn't your favourite Subject");
//            }
//        }
//    }
//}
//Age Category Selection
//namespace AgeCategorySelection
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            Console.WriteLine("How old Are You?");
//            int Age;
//            Age = int.Parse(Console.ReadLine());
//            if (Age >3 && Age<12) {
//                Console.WriteLine($"You Are just a Child you are {Age} Years Old");

//            }else if (Age >12 && Age<18)

//            {
//                Console.WriteLine($"You are an Teenager you are {Age} Years Old");
//            }else if(Age>18 && Age<65)
//            {
//                Console.WriteLine($"You are an Adult you are {Age} Years Old");

//            }else if (Age >= 65)
//            {
//                Console.WriteLine($"You are an Old Man you are {Age} Years Old");
//            }
//        }
//    }
//}

using System.Linq.Expressions;

//namespace Password
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {


//            string Password;
//            string ConfirmPassword;
//            do {
//                Console.WriteLine("Write your Password Please");
//                Password = Console.ReadLine();
//                Console.WriteLine("Please Confirm your Password");
//                ConfirmPassword = Console.ReadLine();
//                if (Password != ConfirmPassword)
//                {
//                    Console.WriteLine("Write your Password again please");
//                }

//            } while (Password != ConfirmPassword);

//            if (Password == ConfirmPassword)
//            {
//                Console.WriteLine("Your Password its okay");
//            }
//            else { Console.WriteLine("Your password its not okay"); }


//        }
//    }
//}

//namespace NumberSelection
//{
//    class Program
//    {
//        static void Main(string[] args) {
//            Console.WriteLine("Input two numbers please, \n first number please");
//            int firstnumber = int.Parse(Console.ReadLine());
//            Console.WriteLine("Input the second number please");
//            int secondnumber = int.Parse(Console.ReadLine());
//            Console.WriteLine("Let me check if they are equals");

//            if (firstnumber == secondnumber)
//            {
//                Console.WriteLine("The two numbers are equal");
//            }
//            else if(firstnumber>secondnumber){
//                Console.WriteLine("The first number is greater than the second number");
//            }
//            else if (firstnumber < secondnumber)
//            {
//                Console.WriteLine("The second number is greater than the first number");
//            }
//        }
//    }
//}

//namespace LargestNumber
//{
//    class Program
//    {
//        static void Main(string[] args) 
//        {
//            Console.WriteLine("Enter the first number");
//            int fnumber = int.Parse(Console.ReadLine());
//            Console.WriteLine("Enter the second number");
//            int snumber = int.Parse(Console.ReadLine());
//            Console.WriteLine("Enter the third number");
//            int tnumber = int.Parse(Console.ReadLine());

//            if (fnumber> snumber && fnumber>tnumber)
//            {
//                Console.WriteLine($"The largest number is the first number, and the number is: {fnumber}");
//            }

//            else if (snumber > fnumber && snumber > tnumber)
//            {
//                Console.WriteLine($"The largest number is the second number, and the number is: {snumber}");
//            }
//            else if (tnumber > snumber && tnumber > fnumber)
//            {
//                Console.WriteLine($"The largest number is the third number, and the number is: {tnumber}");
//            }
//        }
//    }
//}

namespace WeekName
{
    class Program
    {
        static void Main(string[] args)
        { 

        }
    }
}