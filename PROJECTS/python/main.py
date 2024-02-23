import string
import statistics
from functools import reduce
# num = int(input("Ingrese el numero de pares que quieres obtener")) 




# for i in range(1, num):
#     if i%2 !=0:
#         print("numero impar: {}".format(i))
        


# cuenta = int(input("ingrese un numero para comenzar la cuenta..."))

# for i in range(cuenta):
#     tem = cuenta
#     print("Iteracion {}".format(tem - i ))


letras_input = int(input ("Ingrese el numero de letras..."))
    


def letterGenerator(letras):
        if letras <= 26:
            alfabeto = string.ascii_lowercase[:letras]
        else : 
            alfabeto = (string.ascii_lowercase*letras) [:letras]
            return alfabeto
        
print(letterGenerator(letras_input)) 


numeros= [ 1,2,3,4,5]

def Prom(lst):
     reduce(lambda a,b)