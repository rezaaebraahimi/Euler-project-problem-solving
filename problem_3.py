"""
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
"""

num = 600851475143

def prime(x):
    if x > 1:
        for n in range(2, int(x/2)+1):
            if (x % n) == 0:
                return False
        else:
            return True
    else:
       return False
 
 
for n in range(1,int(num/2)+1):
    if num % n == 0:
        num = num/n
        if prime(num):
            print(num)

    ### Answer is 6857 ###