"""
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
"""


def prime(x):
    for n in range(2, int(x / 2) + 1):
        if (x % n) == 0:
            return False
    else:
        return True


sum = 0

for n in range (2, 2000000):
    if prime(n):
        sum += n

print(sum)
        