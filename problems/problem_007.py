"""
By listing the first six prime numbers: 
2, 3, 5, 7, 11, and 13,
we can see that the 6th prime is 13.

What is the 10001st prime number?

"""


def prime(x):
    for n in range(2, int(x / 2) + 1):
        if (x % n) == 0:
            return False
    else:
        return True


def answer():
    primes = []
    num = 2

    while len(primes) < 10001 :
        if prime(num):
            primes.append(num)
        num += 1
    return primes[-1]
    
    
print(answer())
    
    ### Answer is 104743 ###