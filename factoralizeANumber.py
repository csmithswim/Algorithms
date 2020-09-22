# def factorial():

#     demo = int(input('enter a number to factorialize '))





def recursiveFactorial(n):
    
    n = int(input('Input a number to compute the factorial: '))
    if n === 0:
        print(1)
        return 1
    else:
        print(n*factorial(n-1))
        return n * factorial(n-1)


